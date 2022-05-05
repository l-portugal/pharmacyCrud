const URL_API = 'http://localhost:4000';

export const getPharmacies = async () => {
  try {
    const res = await fetch(`${URL_API}/pharmacies`);
    return res.json();
  } catch (err) {
    throw new Error(err)
  }
}

export const getPharmacy = async (id) => {
  try {
    const res = await fetch(`${URL_API}/pharmacies/${id}`);
    return res.json();
  } catch (err) {
    throw new Error(err)
  }
}

export const createPharmacy = async (pharmacyData) => {
  try {
    const res = await fetch(`${URL_API}/pharmacies`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pharmacyData)
    });
    return res.json();
  } catch (err) {
    throw new Error(err)
  }
}

export const updatePharmacy = async (id, pharmacyData) => {
  try {
    const res = await fetch(`${URL_API}/pharmacies/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pharmacyData)
    });
    return res.json();
  } catch (err) {
    throw new Error(err)
  }
}

export const deletePharmacy = async (id) => {
  try {
    const res = await fetch(`${URL_API}/pharmacies/${id}`, {
      method: 'DELETE'
    });
    return res.json();
  } catch (err) {
    throw new Error(err)
  }
}