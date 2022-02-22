import { Grid, Paper, Typography } from "@mui/material"

import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
const History=(props)=>{
    return(<>
            <Paper   sx={{marginTop:"8px",marginBottom:"12px",borderTop:`3px solid ${props.color}`}}>
            
        <Grid container justifyContent="space-around">
       
            <Grid item lg={4}>
            <Typography align="left" sx={{fontWeight:"550",marginTop:"10px",marginBottom:"10px",marginLeft:"10px"}}>
            {props.title}
            </Typography></Grid>
            <Grid item lg={4}>
            
            <Typography align="right" sx={{marginTop:"10px",marginBottom:"10px"}}>
            {props.cost}
            </Typography></Grid>
            <Grid item lg={4}>
            
            <Typography align="right" sx={{marginBottom:"10px"}}>
            
            
            <IconButton aria-label="edit">
            
  <EditIcon fontSize="small" color="primary"/></IconButton>
  
  <IconButton aria-label="delete">
  <DeleteIcon fontSize="small" sx={{ color: "red" }}/>
  </IconButton>

  </Typography></Grid>
            
        </Grid></Paper>
        
    </>)
}

export default History;