import axios from "axios";
import {
  ADD_BET_SLIP,
  CLEAR_BET_SLIP,
  DELETE_BET_SLIP,
  HANDLE_BET,
} from "./type";

export const addBetSlip = (betData) => {
  return {
    type: ADD_BET_SLIP,
    payload: betData,
  };
};

export const deleteBetSlip = (id) => {
  return {
    type: DELETE_BET_SLIP,
    payload: id,
  };
};

export const clearBetSlip = () => {
  return {
    type: CLEAR_BET_SLIP,
  };
};

export const handleBet = (betData) => {
  return (dispatch) => {
    axios.post('https://api.convexit.dev/sport-data/bet.place/', betData)
    .then(res => {
      console.log(res.data);
      dispatch({
        type:HANDLE_BET,
        payload:res.data
      })
    })
    .catch(err=>{
      console.log(err.response.data);
    })
  };
};
