import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addPharmacy } from '../../redux/actions/pharmacies/pharmaciesActions';
import { useNavigate } from 'react-router-dom';

import { setAlertOpen, setOperationResult } from '../../redux/appRedux';
import { AlertMsg } from '../alert/alert';

const CreateForm = () => {

  const navigate = useNavigate();
  const dispatcher = useDispatch();

  const [ imageSource, setImageSource ] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLR0uw5vGaFyZAEKskr8KKioOYvV4bzdLIHWk1QDvrzTZL4rgYv8V03ZfTTVuklFw7QBA&usqp=CAU')

  const operationResult = useSelector((state) => state.app.operationResult);

  const nameFieldRef = useRef();
  const addressFieldRef = useRef();
  const emailFieldRef = useRef();
  const phoneFieldRef = useRef();
  const latitudeFieldRef = useRef();
  const longitudeFieldRef = useRef();
  const urlImgFieldRef = useRef();

  useEffect(() => {
    dispatcher(setAlertOpen(false));
    dispatcher(setOperationResult(0));
  }, []);

  useEffect(() => {
    if (operationResult === 1)
      navigate('/pharmacies');
  }, [operationResult]);

  const handleCreate = async () => {

    const data = {
      name: nameFieldRef.current.value,
      address: addressFieldRef.current.value,
      email: emailFieldRef.current.value,
      phone: phoneFieldRef.current.value,
      latitude: latitudeFieldRef.current.value,
      longitude: longitudeFieldRef.current.value,
      URL_img: [urlImgFieldRef.current.value]
    }

    await dispatcher(addPharmacy(data));

  }

  const setImage = () => {
    setImageSource(urlImgFieldRef.current.value)
  }

  const styles = {
    styleInput: {
      marginTop: 10
    }
  }

  return (
    <>

      <AlertMsg />

      <h1 style={{ color: '#757575' }}>Agregar</h1>

      <Box
        component="form"
        // noValidate
        autoComplete="off"
      >


        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>

          <Grid item xs={3}>

            <Grid container alignItems="center" justify="center" direction="column">

              <TextField
                required
                label="Nombre"
                variant="outlined"
                inputRef={nameFieldRef}
                style={styles.styleInput}
              />

              <TextField
                required
                label="Dirección"
                variant="outlined"
                inputRef={addressFieldRef}
                style={styles.styleInput}
              />

              <TextField
                label="Teléfono"
                variant="outlined"
                inputRef={phoneFieldRef}
                style={styles.styleInput}
              />

              <TextField
                label="Email"
                variant="outlined"
                inputRef={emailFieldRef}
                style={styles.styleInput}
              />

            </Grid>

          </Grid>

          <Grid item xs={3}>

            <Grid alignItems="center" justify="center" direction="column">

              <TextField
                required
                label="Latitud"
                variant="outlined"
                inputRef={latitudeFieldRef}
                style={styles.styleInput}
              />

              <TextField
                required
                label="Longitud"
                variant="outlined"
                inputRef={longitudeFieldRef}
                style={styles.styleInput}
              />

              <TextField
                required
                label="URL Imagen"
                variant="outlined"
                inputRef={urlImgFieldRef}
                // defaultValue={urlImgFieldRef}
                style={styles.styleInput}
                onChange={ () => setImage() }
              />

              <Button variant="contained" onClick={() => handleCreate()} style={{ marginTop: 10 }}>Agregar</Button>

            </Grid>

          </Grid>

          <Grid item xs={3}>

            <img src={imageSource} alt="imagen" style={{ height: '200px' }} />

          </Grid>

        </Grid>



      </Box>

    </>
  )
}

export default CreateForm