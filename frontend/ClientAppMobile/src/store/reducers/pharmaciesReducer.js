import { GET_ALL_PHARMACIES, GET_PHARMACY, ADD_PHARMACY, EDIT_PHARMACY, DELETE_PHARMACY } from "../actions/pharmaciesActions";

const initialState = {
  pharmacies: [],
  pharmacy: [],
}

export const pharmaciesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PHARMACIES:
      return { ...state, pharmacies: payload }
    // case FILTER_PRODUCTS:
    //   return { ...state, productsFilter: payload}
    case GET_PHARMACY:
      return { ...state, pharmacy: payload }
    case ADD_PHARMACY:
      return { ...state, pharmacy: payload }
    case EDIT_PHARMACY:
      return { ...state, pharmacy: payload }
    case DELETE_PHARMACY:
      return { ...state, pharmacy: payload }
    default:
      return state
  }
}