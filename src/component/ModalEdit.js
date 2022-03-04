import { Modal, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'

import EditTransaction from "./EditTransaction";
export const ModalEdit = ({desc,title,cost,id,color,isModalOpen,setIsModalOpen,oneEdit
,isExpense}) => {

  const [tempDesc,setTempDesc]=useState(desc);
    
    const [tempVal,setTempVal]=useState(cost);
    
    const [tempExpense,setTempExpense]=useState(color==="red"?true:false);

   const handleSave=()=>{
    oneEdit(id,tempDesc,tempVal,tempExpense===true?"red":"green");
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
          <EditTransaction   tempDesc={tempDesc} tempVal={tempVal} id={id}
          
           tempExpense={tempExpense}
          setTempExpense={setTempExpense}
          setTempDesc={setTempDesc}
          setTempVal={setTempVal}
          setIsModalOpen={setIsModalOpen}
          handleSave={handleSave}
           />
           </Box>
      </Modal>
  </>)
}

export default ModalEdit;