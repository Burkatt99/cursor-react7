import { ADD_ITEM_USER } from "../constans/user_type";
import axios from "axios";

export const addUser = (userData) => async (dispatch) => {
  const result = await axios.post(
    "https://tweets.globalofficiallottery.com/users/",
    userData
  );
  const newUser = result.data.data;
  dispatch({
    type: "ADD_ITEM_USER",
    payload: newUser,
  });
};

export const getUser = () => async (dispatch) => {
  const res = await axios.get(
    "https://tweets.globalofficiallottery.com/users/"
  );
  const users = res.data.data;
  users.forEach((el) => {
    dispatch({
      type: "ADD_ITEM_USER",
      payload: el,
    });
  });
};
