import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { setTitle } from '../../redux/appRedux';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PharmaciesList from '../../components/pharmacies/PharmaciesList';

import { AlertMsg } from '../../components/alert/alert';


const Pharmacies = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle('Farmacias'));
  })

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }} style={{ alignContent: 'center', alignItems: 'center' }}>
            
            <AlertMsg />

            <Button variant="contained" onClick={() => navigate('/pharmacies/add')}> Agregar </Button>

          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: '10px' }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <PharmaciesList />
          </Paper>
        </Grid>
      </Grid>

    </>
  )
}

export default Pharmacies