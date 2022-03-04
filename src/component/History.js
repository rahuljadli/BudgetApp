import { Grid, Paper, Typography } from "@mui/material"

import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";

import ModalEdit from "./ModalEdit";
const History=({title,cost,id,color,onDelete,oneEdit,setDesc,desc,setIsExpense,isExpense})=>{

    
    const [isModalOpen,setIsModalOpen]=useState(false);
    return(<>
    
            <Paper   sx={{marginTop:"8px",marginBottom:"12px",
            borderTop:`3px solid ${color}`}}>
            
        <Grid container justifyContent="space-around">
       
            <Grid item lg={4}>
            <Typography align="left" sx={{fontWeight:"550",marginTop:"10px",marginBottom:"10px",marginLeft:"10px"}}>
            {desc}
            </Typography></Grid>
            <Grid item lg={4}>
            
            <Typography align="right" sx={{marginTop:"10px",marginBottom:"10px"}}>
             ₹{cost}
            </Typography></Grid>
            <Grid item lg={4}>
            
            <Typography align="right" sx={{marginBottom:"10px"}}>
            
            
            <IconButton aria-label="edit" onClick={()=>setIsModalOpen(true)}>
            
  <EditIcon fontSize="small" color="primary"/></IconButton>
  
  <IconButton aria-label="delete" onClick={()=>onDelete(id)}>
  <DeleteIcon fontSize="small"
  
   sx={{ color: "red" }}/>
  </IconButton>

  </Typography>
  </Grid>
            
        </Grid>
        
        </Paper>
        
<ModalEdit isModalOpen={isModalOpen}
desc={desc}
cost={cost}
id={id}
color={color}
oneEdit={oneEdit}
   setDesc={setDesc}
 setIsModalOpen={setIsModalOpen} />
    </>)
}

export default History;