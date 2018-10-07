import axios from "axios";
// const uri = process.env.ocp || require("../config");

const Get = () => {
  return axios.get(`https://trammer-back.herokuapp.com/api/tram`);
};

export default { Get };
