import React from 'react'
import { Button, Checkbox, FormControlLabel, Grid, IconButton, InputAdornment,
 TextField, Typography } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import {  DialogActions} from '@mui/material'
import { Box } from "@mui/system";
export const EditTransaction = (props) => {
    
   return (
     <>
            <Grid container spacing={1}>
                <Grid item lg={8}>
                    <Typography variant="body2" sx={{ fontWeight: "550" }} align="left"
                    >Description</Typography>
                </Grid>
                <Grid item lg={4}>
                    <Typography variant="body2" sx={{ fontWeight: "550" }} align="left">Value</Typography>
                </Grid>

                <Grid item lg={8}>
                    <TextField size="small" label="New thing"
                        fullWidth variant="outlined"
                        defaultValue={props.tempDesc && props.tempDesc}
                        onChange={(event) => props.setTempDesc(event.target.value)}
                        val={props.tempDesc}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>

                                        <LocalOfferIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}>

                    </TextField>
                </Grid>
                <Grid item lg={4}>
                    <TextField size="small"
                    
                    defaultValue={props.tempVal && props.tempVal}
                        onChange={(event) => props.setTempVal(event.target.value)}
                        val={props.tempVal}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">$</InputAdornment>)
                        }}

                        fullWidth variant="outlined"></TextField>

                </Grid>
                <Grid item lg={12}>
                    <Box component="span" sx={{ p: 1, color: "black" }}>
                        <FormControlLabel
                            label="Is Expense"
                            control={<Checkbox
                                color="success"
                                size="medium"
                                defaultValue={props.tempExpense}
                                checked={props.tempExpense}
                                onChange={() => props.setTempExpense(!props.tempExpense)} />}
                        />
                    </Box>

                </Grid>
                 <DialogActions>
          <Button variant="contained" color="success" 
          onClick={()=>props.handleSave()} >Save</Button>
        
          <Button variant="contained" color="inherit" onClick={()=>props.setIsModalOpen(false)} >Close</Button>
        </DialogActions>   
            </Grid>
        </>
  )
}
export default EditTransaction