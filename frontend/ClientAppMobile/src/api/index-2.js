const BASE_URL = 'http://192.168.1.104:4000';

export const getPharmacies = (next) => {
  const url = `${BASE_URL}/pharmacies`
  return fetch(url)
  .then( res => res.json() )
  .then( data => {
    // return Promise.resolve(data)
    return data;
  })
  .catch(err => {
    // throw err
    console.log(err)
  })
}

export const getPharmacy = (id) => {
  const url = `${BASE_URL}/pharmacies/${id}`;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      return Promise.resolve(data)
      // return data;
    })
    .catch(err => {
      // throw err
      console.log('----', err)
    }) 
}

export const deletePharmacy = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/pharmacies/${id}`, {
      method: 'DELETE'
    });
    return res.json();
  } catch (err) {
    throw new Error(err)
  }
}
