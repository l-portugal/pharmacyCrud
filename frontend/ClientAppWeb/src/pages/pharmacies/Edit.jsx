import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import PharmacyEditForm from "../../components/pharmacies/EditForm";

const ParhacyForm = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{p: 2}}>
          
          <PharmacyEditForm />
          
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ParhacyForm