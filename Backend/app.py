from flask import Flask, Response, request, jsonify
from utils import GymExerciseRecognizer,YogaExerciseRecognizer
import cv2
from flask_cors import CORS
import google.generativeai as genai

genai.configure(api_key="AIzaSyApQUwjsjZNblOmOvfOcv8dci4tTY8orEg")
model = genai.GenerativeModel("gemini-1.5-flash")

app = Flask(__name__)
CORS(app)

feed = None

@app.route('/video_feed')
def video_feed():
    global feed
    user_choice=request.args.get('id')
    flag=request.args.get('flag')
    print(user_choice)
    print(flag)
    if feed is None:
        feed = cv2.VideoCapture(0)
    if flag=='gym':
        response = Response(GymExerciseRecognizer().generate_frames(feed,user_choice), mimetype='multipart/x-mixed-replace; boundary=frame')
    else:
        yoga = YogaExerciseRecognizer(user_choice)
        response = Response(yoga.generate_frames(feed), mimetype='multipart/x-mixed-replace; boundary=frame')
    return response

@app.route('/cancel_feed')
def cancel_feed():
    global feed
    if feed is not None:
        feed.release()
        feed = None
        print("Feed released successfully.")
    else:
        print("No feed to release.")
    return "Feed canceled", 200

@app.route('/feedback', methods=['GET'])
def get_feedback():
    recognizer = GymExerciseRecognizer()
    return recognizer.get_feed()

@app.route('/bmi', methods=['GET'])
def bmi_feedback():
    try:
        # Get BMI from query parameters
        bmi = float(request.args.get('bmi'))
        
        # Determine BMI category
        if bmi < 18.5:
            category = "underweight"
        elif 18.5 <= bmi < 24.9:
            category = "normal"
        elif 25 <= bmi < 29.9:
            category = "overweight"
        else:
            category = "obese"

        # Create prompt for Generative AI
        prompt = (
            f"Based on a BMI of {bmi}, which falls into the '{category}' category, "
            "provide food recommendations, exercise recommendations, "
            "and the daily caloric intake and burn suggestions."
        )

        response = model.generate_content(prompt)
        recommendations = response.text.strip().split('\n')
        print(recommendations)

        food_recommendations = []
        exercise_recommendations = []
        caloric_intake = ""
        calories_burned = ""

        for recommendation in recommendations:
            if recommendation.startswith("## Food Recommendations"):
                current_section = "food"
            elif recommendation.startswith("## Exercise Recommendations"):
                current_section = "exercise"
            elif recommendation.startswith("## Daily Calorie Intake and Burn:"):
                current_section = "calories"
            elif current_section == "food" and recommendation.startswith("*"):
                food_recommendations.append(recommendation.strip("* ").strip())
            elif current_section == "exercise" and recommendation.startswith("*"):
                exercise_recommendations.append(recommendation.strip("* ").strip())
            elif current_section == "calories":
                if recommendation.startswith("*"):
                    if "calories per day" in recommendation:
                        caloric_intake = recommendation.strip()
                    elif "burn at least" in recommendation:
                        calories_burned = recommendation.strip()

        return jsonify({
            "bmi_category": category,
            "recommended_foods": food_recommendations,
            "recommended_exercises": exercise_recommendations,
            "daily_caloric_intake": caloric_intake,
            "calories_burned": calories_burned
        })

    except ValueError:
        return jsonify({"error": "Invalid BMI value provided."}), 400
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)