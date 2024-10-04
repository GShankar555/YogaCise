import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/img/icons/body-part.png';
import TargetImage from '../assets/img/icons/target.png';
import EquipmentImage from '../assets/img/icons/equipment.png';


const Detail = ({exerciseDetail}) => {
  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
      id: 1,
    },
    {
      icon: TargetImage,
      name: target,
      id: 2,
    },
    {
      icon: EquipmentImage,
      name: equipment,
      id: 3,
    },
  ];

  return (
    <Stack gap="60px" sx={{flexDirection: {lg: 'row'}, p:'20px', alignItems:'center'}}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
        <Typography variant='h3' fontWeight="bold" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercises keep you strong. {name} {` `}
          is one of the best exercises to target your {target}.It will help you improve mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.id} direction = 'row' gap = "24px" alignItems = "center">
            <Button sx={{background: '#fff2db', borderRadius:'50%', width:'100px', height:'100px'}}>
              <img src={item.icon} alt={bodyPart} style={{width:'50px', height:'50px'}} />
          </Button>
          <Typography textTransform="capitalize" variant='h5'>
            {item.name}
          </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail
