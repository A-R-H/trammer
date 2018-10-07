import axios from "axios";
const uri = process.env.uri || require("../config");

const Get = params => {
  return axios.get(`${uri}/api/tram`);
};

export default { Get };
