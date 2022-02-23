import { Button, DialogActions, Modal, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'

import Transaction from "./Transaction";
export const ModalEdit = ({title,cost,id,color,isModalOpen,setIsModalOpen,oneEdit}) => {

   const handleSave=()=>{
     
    oneEdit(id,title,cost,color);
    setIsModalOpen(false);
   }
  return (
      <>
    <Modal open={isModalOpen}
    
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <Box sx={{position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,}}>
  <Paper>
      
  <Typography align="center" id="modal-modal-title" variant="h6" component="h2">
            Edit Entry 
          </Typography>
  </Paper>
          <Transaction  title={title} cost={cost} id={id} color={color}   />
          <DialogActions>
          <Button variant="contained" color="success" 
          onClick={()=>handleSave()} >Save</Button>
        
          <Button variant="contained" color="inherit" onClick={()=>setIsModalOpen(false)} >Close</Button>
        </DialogActions> </Box>
      </Modal>
  </>)
}

export default ModalEdit;