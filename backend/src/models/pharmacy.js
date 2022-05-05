const database = require('../../config/database');
const Pharmacy = require('./schemas/pharmacy.schema');

const getPharmacies = async () => {
  const db = await database();
  const pharmacy = new Pharmacy();
  try {
    const filter = {};
    let pharmacies = await Pharmacy.find(filter);
    db.close();
    return pharmacies;
  } catch (err) {
    console.log('err' + err);
    res.status(500).send(err);
  }
}

const getPharmacy = async (pharmacyId) => {
  const db = await database();
  const pharmacy = new Pharmacy();
  try {
    const filter = { _id: pharmacyId };
    let pharmacies = await Pharmacy.find(filter);
    db.close();
    return pharmacies;
  } catch (err) {
    console.log('err' + err);
    res.status(500).send(err);
  }
}

const insertPharmacy = async (name, address, latitude, longitude, URL_img, phone, email, _24hs) => {
  const db = await database();

  const pharmData = {
    name: name,
    address: address,
    location: {
      latitude: latitude,
      longitude: longitude
    },
    URL_img: URL_img,
    phone: phone,
    email: email,
    _24hs: _24hs
  }

  const pharmacy = new Pharmacy(pharmData);
  
  try {
    let result = await pharmacy.save();
    db.close()
    return result;
  } catch (err) {
    console.log('err' + err);
    res.status(500).send(err);
  }
};

const removePharmacy = async (pharmacyId) => {
  const db = await database();
  const pharmacy = new Pharmacy();
  try {
    const filter = { _id: pharmacyId };
    let pharmacies = await Pharmacy.remove(filter);
    db.close();
    return pharmacies;
  } catch (err) {
    console.log('err' + err);
    res.status(500).send(err);
  }
}

const updatePharmacy = async (pharmacyId, name, address, latitude, longitude, URL_img, phone, email, _24hs) => {
  const db = await database();
  
  try {
    let pharmacy = await Pharmacy.findByIdAndUpdate(pharmacyId, { name, address, location: { latitude, longitude }, URL_img, phone, email, _24hs }, { new: true });
    db.close();
    return pharmacy;
  } catch (err) {
    console.log('err' + err);
    res.status(500).send(err);
  }
}

module.exports = { getPharmacies, getPharmacy, insertPharmacy, updatePharmacy, removePharmacy }