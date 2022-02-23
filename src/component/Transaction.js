import { Button, Checkbox, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import ButtonAction from "./ButtonAction";

const Transaction = (props) => {
    const [desc, setDesc] = useState("");

    const [val, setVal] = useState("");

    const [isExpense, setIsExpense] = useState(true);

    useEffect(() => {
        
        if(props.color && props.color=="green")
        setIsExpense(false)
    },[desc,val,isExpense]);

    
    const cancelTransaction = () => {
        setDesc("");
        setVal("");
    }
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
                        defaultValue={props.title && props.title}
                        onChange={(event) => setDesc(event.target.value)}
                        val={desc}
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
                        onChange={(event) => setVal(event.target.value)}
                        val={val}
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
                                defaultValue={props.color=="red"?true:false}
                                checked={isExpense}
                                onChange={() => setIsExpense(!isExpense)} />}
                        />
                    </Box>

                </Grid>
                {props.showAction &&
                    <ButtonAction desc={desc} val={val}
                
                    cancelTransaction={cancelTransaction}
                     addTransaction={props.addTransaction} />}
            </Grid>
        </>
    )
}
export default Transaction;