import { Button, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const Transaction = () => {
    return (
        <>
            <Grid container spacing={1}>
                <Grid item lg={12}><Typography variant="h5">Add new transaction</Typography>
                </Grid>
                <Grid item lg={8}><Typography variant="body2" sx={{fontWeight:"550"}} align="left"
                >Description</Typography>
                </Grid>
                <Grid item lg={4}><Typography variant="body2"  sx={{fontWeight:"550"}} align="left">Value</Typography>
                </Grid>

                <Grid item lg={8}>
                    <TextField size="small" label="New thing" fullWidth variant="outlined"
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
                    InputProps={{
                        startAdornment:(<InputAdornment position="start">$</InputAdornment>)
                    }}
                    
                     fullWidth variant="outlined"></TextField>

                </Grid>
                <Grid item>
                <Button variant="contained" aria-label="delete" size="small">Ok
</Button> &nbsp;
<Button aria-label="delete" variant="contained" color="error" size="small">
Cancel
</Button>
                </Grid>
            </Grid>
        </>
    )
}
export default Transaction;