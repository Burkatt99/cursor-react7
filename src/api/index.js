import axios from "axios";

export const getDate = async () => {
  const res = await axios.get(
    "https://tweets.globalofficiallottery.com/users/"
  );
  return res.data;
};
