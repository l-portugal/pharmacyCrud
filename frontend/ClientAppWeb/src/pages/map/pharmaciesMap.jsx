import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { setTitle } from '../../redux/appRedux';
import { allPharmacies } from '../../redux/actions/pharmacies/pharmaciesActions';

import { Map } from '../../components/map/Map';

const PharmaciesMap = () => {

  const pharmacies = useSelector((state) => state.pharmaciesReducer.pharmacies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle('Mapa'));
    dispatch(allPharmacies());
  }, [])

  return (
    <>
      <Grid container spacing={1} style={{ marginTop: '10px' }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
              
              <Map pharmacies={pharmacies}/>
              
          </Paper>
        </Grid>
      </Grid>

    </>
  )
}

export default PharmaciesMap