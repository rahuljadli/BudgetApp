import React from "react";
import { Typography } from '@mui/material';
const Budget=(props)=>{
    return(
    <>
    <Typography variant="h5">Budget</Typography>
    
    <Typography variant="string" sx={{marginLeft:"20px",fontWeight:"bold"}} align="left" gutterBottom>Your Balance</Typography>
    
    <Typography variant="h4" align="left" gutterBottom>₹{props.budget}</Typography>
    </>)
}
export default Budget;