import axios from "axios";
const uri = process.env.ocp || require("../config");

const Get = () => {
  return axios.get(`${uri}/api/tram`);
};

export default { Get };
