import React from 'react'
import "./SkillComponent.css"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

function SkillComponent(props) {
  return (
    <div className='skillComponent__div'>
        <p>{props.name}</p>
        <Box sx={{ flexGrow: 1 }}>
      
      <BorderLinearProgress variant="determinate" value={props.percentage} />
    </Box>
    </div>
  )
}

export default SkillComponent