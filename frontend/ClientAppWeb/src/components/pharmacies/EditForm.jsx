import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';
import { getPharmacy, updatePharmacy } from '../../api';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAlertOpen, setOperationResult } from '../../redux/appRedux';
import { getPharmacyId, editPharmacy } from '../../redux/actions/pharmacies/pharmaciesActions';
import { useNavigate } from 'react-router-dom';
import { AlertMsg } from '../alert/alert';

const EditForm = (props) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const pharmacy = useSelector((state) => state.pharmaciesReducer.pharmacy)
  const operationResult = useSelector((state) => state.app.operationResult);
  const dispatcher = useDispatch();

  const [ imageSource, setImageSource ] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLR0uw5vGaFyZAEKskr8KKioOYvV4bzdLIHWk1QDvrzTZL4rgYv8V03ZfTTVuklFw7QBA&usqp=CAU')

  const idFieldRef = useRef();
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
    dispatcher(getPharmacyId(id))
  }, [dispatcher])

  useEffect(() => {
    if (operationResult === 1)
      navigate('/pharmacies');
  }, [operationResult]);

  useEffect(() => {
    idFieldRef.current.value = pharmacy ? pharmacy._id : '';
    nameFieldRef.current.value = pharmacy ? pharmacy.name : '';
    addressFieldRef.current.value = pharmacy ? pharmacy.address : '';
    phoneFieldRef.current.value = pharmacy ? pharmacy.phone : '';
    emailFieldRef.current.value = pharmacy ? pharmacy.email : '';
    latitudeFieldRef.current.value = pharmacy.location ? pharmacy.location.latitude : '';
    longitudeFieldRef.current.value = pharmacy.location ? pharmacy.location.longitude : '';
    urlImgFieldRef.current.value = pharmacy.URL_img ? pharmacy.URL_img[0] : '';
  }, [pharmacy]);

  const _editPharmacy = async () => {

    const id = pharmacy._id;

    const data = {
      name: nameFieldRef.current.value,
      address: addressFieldRef.current.value,
      email: emailFieldRef.current.value,
      phone: phoneFieldRef.current.value,
      latitude: latitudeFieldRef.current.value,
      longitude: longitudeFieldRef.current.value,
      URL_img: [urlImgFieldRef.current.value]
    }

    await dispatcher(editPharmacy(id, data))
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


      <h1 style={{ color: '#757575' }}>Modificar Datos</h1>

      <Box
        component="form"
        // noValidate
        autoComplete="off"
      >

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>

          <Grid item xs={3}>

            <Grid container alignItems="center" justify="center" direction="column">

              <TextField
                label="ID"
                variant="outlined"
                inputRef={idFieldRef}
                defaultValue={idFieldRef}
                disabled
                aria-readonly
                style={styles.styleInput}
              />

              <TextField
                required
                label="Nombre"
                variant="outlined"
                inputRef={nameFieldRef}
                defaultValue={nameFieldRef}
                style={styles.styleInput}
              />

              <TextField
                required
                label="Dirección"
                variant="outlined"
                inputRef={addressFieldRef}
                defaultValue={addressFieldRef}
                style={styles.styleInput}
              />

              <TextField
                label="Teléfono"
                variant="outlined"
                inputRef={phoneFieldRef}
                defaultValue={phoneFieldRef}
                style={styles.styleInput}
              />

              <TextField
                label="Email"
                variant="outlined"
                inputRef={emailFieldRef}
                defaultValue={emailFieldRef}
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
                defaultValue={latitudeFieldRef}
                style={styles.styleInput}
              />

              <TextField
                required
                label="Longitud"
                variant="outlined"
                inputRef={longitudeFieldRef}
                defaultValue={longitudeFieldRef}
                style={styles.styleInput}
                onChange={ () => setImage() }
              />

              <TextField
                required
                label="URL Imagen"
                variant="outlined"
                inputRef={urlImgFieldRef}
                defaultValue={urlImgFieldRef}
                style={styles.styleInput}
              />

              <Button variant="contained" onClick={() => _editPharmacy()} style={{ marginTop: 10 }}>Guardar</Button>


            </Grid>

          </Grid>

          <Grid item xs={3}>

            {
              pharmacy.URL_img &&
                pharmacy.URL_img.length > 0 && pharmacy.URL_img[0] !== 'undefined' && pharmacy.URL_img[0] !== '' ?
                  <img src={pharmacy.URL_img[0]} alt="imagen" style={{ height: '200px' }} />
                :
                  <img src={imageSource} alt="imagen" style={{ height: '200px' }} />
            }

          </Grid>

        </Grid>

      </Box>


    </>
  )
}

export default EditForm