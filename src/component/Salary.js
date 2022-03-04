import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'
const Salary=(props)=>{
    return(<>
<Paper   elevation={2} >
<Grid container 
 justifyContent="space-center"
  >
 <Grid item lg={6} md={4}  >
 <Typography align="center" variant="h6">Income:</Typography>
 <Typography align="center"  variant="h5" color="green">   ₹{props.totalIncome}</Typography>
 
 </Grid> 
 <Grid item lg={6} md={4} >
 <Typography align="center" variant="h6">Expenses:</Typography>
 
 <Typography align="center" variant="h5"  color="red"> ₹{props.totalExpense} </Typography>
 </Grid> 
 <Grid item lg={12}>
 

 </Grid>
</Grid></Paper>
 <Typography align="left" variant="h6" sx={{padding:"8px"}}  >History</Typography>
 
    </>)
}
export default Salary;