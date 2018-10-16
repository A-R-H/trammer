import axios from "axios";
// const uri = process.env.ocp || require("../config");

const Get = () => {
  // return axios.get(`https://trammer-back.herokuapp.com/api/tram`);
  return axios.get(`http://localhost:8080/api/tram`);
};

export default { Get };
