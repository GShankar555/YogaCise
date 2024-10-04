from flask import Flask, Response, request
from utils import GymExerciseRecognizer,YogaExerciseRecognizer
import cv2
from flask_cors import CORS

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

if __name__ == "__main__":
    app.run(debug=True)