import {  Checkbox, FormControlLabel, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import { Box } from "@mui/system";
import ButtonAction from "./ButtonAction";

const Transaction = (props) => {
    
    return (
        <>
            <Grid container spacing={1}>
                <Grid item lg={12}>
                    <Typography variant="h5">Add new transaction</Typography>
                </Grid>
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
                        defaultValue={props.desc && props.desc}
                        onChange={(event) => props.setDesc(event.target.value)}
                        val={props.desc}
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
                    
                    defaultValue={props.cost && props.cost}
                        onChange={(event) => props.setVal(event.target.value)}
                        val={props.val}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start"> ₹</InputAdornment>)
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
                                defaultValue={props.isExpense && props.isExpense}
                                checked={props.isExpense}
                                onChange={() => props.setIsExpense(!props.isExpense)} />}
                        />
                    </Box>

                </Grid>
                {props.showAction &&
                    <ButtonAction  val={props.val}
                setDesc={props.setDesc}
             desc={props.desc}
                     addTransaction={props.addTransaction} />}
            </Grid>
        </>
    )
}
export default Transaction;