import { Button, Grid } from '@mui/material';
import React from 'react';

export const ButtonAction = (props) => {
  return (<Grid item>
    <Button variant="contained" aria-label="delete"
        onClick={() => props.addTransaction(props.desc, props.val)}
        size="small">Ok
    </Button> &nbsp;
    <Button aria-label="delete" variant="contained"
        onClick={() => props.cancelTransaction()}
        color="error" size="small">
        Cancel
    </Button>
</Grid>
  )
}
export default ButtonAction;