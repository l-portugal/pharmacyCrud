const { getPharmacies, getPharmacy, insertPharmacy, updatePharmacy, removePharmacy } = require('../models/pharmacy');
const pharmacySchema = require('./schemas/pharmacy.schema');

const listPharmacies = async (req, res, next) => {
  const pharmacies = await getPharmacies();

  const response = {
    statusCode: res.statusCode,
    status: 'ok',
    data: pharmacies
  }
  res.json( response );
}

const getPharmacyById = async (req, res, next) => {
  const pharmId = req.params.id;
  try {
    const pharmacy = await getPharmacy(pharmId);
    
    const response = {
      statusCode: res.statusCode,
      status: 'ok',
      data: pharmacy[0] ? pharmacy[0] : {}
    }
    res.json( response );
  } catch (err) {
    res.json({
      statusCode: res.statusCode,
      status: 'bad_request',
      message: err.details[0].message
    });
  }
}

const createPharmacy = async (req, res, next) => {
  const { name, address, latitude, longitude, URL_img, phone, email, _24hs } = req.body;
  try {
    const valid = await pharmacySchema.validateAsync({ name, address, latitude, longitude, phone, email, _24hs, URL_img });
    if (valid) {
      const result = await insertPharmacy(name, address, latitude, longitude, URL_img, phone, email, _24hs);
      
      const response = {
        statusCode: res.statusCode,
        status: 'ok',
        message: 'Farmacia agregada correctamente',
        data: result
      }
      res.json( response );
    }
  } catch (err) {
    res.json({
      statusCode: res.statusCode,
      code: 'bad_request',
      message: err.details[0].message
    });
  }
}

const deletePharmacy = async (req, res, next) => {
  try {
    const pharmId = req.params.id;
    const result = await removePharmacy(pharmId);
    
    const response = {
      statusCode: res.statusCode,
      status: 'ok',
      message: 'Farmacia eliminada correctamente',
      data: result
    }
    res.json( response );
  } catch (err) {
    res.json({
      statusCode: res.statusCode,
      code: 'bad_request',
      message: err.details[0].message
    });
  }
}

const editPharmacy = async (req, res, next) => {
  try {
    const pharmId = req.params.id;
    const { name, address, latitude, longitude, URL_img, phone, email, _24hs } = req.body;

    const valid = await pharmacySchema.validateAsync({ name, address, latitude, longitude, phone, email, _24hs, URL_img });
    if (valid) {
      const result = await updatePharmacy(pharmId, name, address, latitude, longitude, URL_img, phone, email, _24hs);
      const response = {
        statusCode: res.statusCode,
        status: 'ok',
        message: 'Farmacia actualizada correctamente',
        data: result
      }
      res.json( response );
    }

  } catch (err) {
    res.json({
      statusCode: res.statusCode,
      code: 'bad_request',
      message: err.details[0].message
    });
  }
}

module.exports = { listPharmacies, getPharmacyById, createPharmacy, deletePharmacy, editPharmacy }