import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'
const Salary=()=>{
    return(<>
<Paper   elevation={2} >
<Grid container 
 justifyContent="space-center"
  >
 <Grid item lg={6} md={4}  >
 <Typography align="center" variant="h6">Income:</Typography>
 <Typography align="center"  variant="h5" color="green">1,045.50</Typography>
 
 </Grid> 
 <Grid item lg={6} md={4} >
 <Typography align="center" variant="h6">Expenses:</Typography>
 
 <Typography align="center" variant="h5"  color="red">623.50</Typography>
 </Grid> 
 <Grid item lg={12}>
 

 </Grid>
</Grid></Paper>
 <Typography align="left" variant="h6" sx={{padding:"8px"}}  >History</Typography>
 
    </>)
}
export default Salary;