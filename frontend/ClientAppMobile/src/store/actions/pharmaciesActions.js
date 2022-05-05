import { getPharmacies, getPharmacy, deletePharmacy } from "./../../api/index-2"
// import { setOperationResult, setAlertMsg, setAlertOpen, setAlertType } from '../../appRedux';

export const GET_ALL_PHARMACIES = 'GET_ALL_PHARMACIES'
// export const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
export const GET_PHARMACY = 'GET_PHARMACY';
export const ADD_PHARMACY = 'ADD_PHARMACY';
export const EDIT_PHARMACY = 'EDIT_PHARMACY';
export const DELETE_PHARMACY = 'DELETE_PHARMACY';

// Actions creator
const getPharmaciesAction = (pharmacies) => ({type: GET_ALL_PHARMACIES, payload: pharmacies});
const getPharmacyAction = (pharmacy) => ({ type: GET_PHARMACY, payload: pharmacy } );
const addPharmacyAction = (pharmacy) => ( { type: ADD_PHARMACY, payload: pharmacy } );
const deletePharmacyAction = (pharmacy) => ( { type: DELETE_PHARMACY, payload: pharmacy } );
const updatePharmacyAction = (pharmacy) => ( { type: EDIT_PHARMACY, payload: pharmacy } );

// Async actions
export const allPharmacies = () => {
  return async dispatch => {
    try {
      const pharmacies = await getPharmacies()
      if(pharmacies.statusCode === 200 && pharmacies.status==='ok')
        dispatch(getPharmaciesAction(pharmacies.data))
    } catch(err) {
      console.log(err)
    }
  }
}

export const getPharmacyId = (id) => {
  return async dispatch => {
    try {
      const pharmacy = await getPharmacy(id)
      dispatch(getPharmacyAction(pharmacy.data))
    } catch(err) {
      console.log(err)
    }
  }
}

export const addPharmacy = (pharmacyData) => {
  return async dispatch => {
    try {
      const pharmacy = await createPharmacy(pharmacyData)
      if(pharmacy.statusCode === 200 && pharmacy.status==='ok'){
        dispatch(setAlertMsg(pharmacy.message));
        dispatch(setAlertOpen(true));
        dispatch(setAlertType('success'));
        dispatch(setOperationResult(1));
        dispatch(addPharmacyAction(pharmacy.data))
      } else {
        dispatch(setAlertMsg(pharmacy.message));
        dispatch(setAlertOpen(true));
        dispatch(setAlertType('error'));
      }

    } catch(err) {
      console.log(err)
    }
  }
}

export const editPharmacy = (id, pharmacyData) => {
  return async dispatch => {
    try {
      const pharmacy = await updatePharmacy(id, pharmacyData);
      if(pharmacy.statusCode === 200 && pharmacy.status==='ok'){
        dispatch(setAlertMsg(pharmacy.message));
        dispatch(setAlertOpen(true));
        dispatch(setAlertType('success'));
        dispatch(setOperationResult(1));
        dispatch(updatePharmacyAction(pharmacy.data));
      } else {
        dispatch(setAlertMsg(pharmacy.message));
        dispatch(setAlertOpen(true));
        dispatch(setAlertType('error'));
      }
    } catch(err) {
      console.log(err)
    }
  }
}

export const removePharmacy = (id) => {
  return async dispatch => {
    try {
      const pharmacy = await deletePharmacy(id);
      if(pharmacy.statusCode === 200 && pharmacy.status==='ok'){
        dispatch(setAlertMsg(pharmacy.message));
        dispatch(setAlertOpen(true));
        dispatch(setAlertType('success'));
        dispatch(deletePharmacyAction(pharmacy.data));
        dispatch(allPharmacies());
      } else {
        dispatch(setAlertMsg(pharmacy.message));
        dispatch(setAlertOpen(true));
        dispatch(setAlertType('error'));
      }
    } catch(err) {
      console.log(err)
    }
  }
}
