import axios from "axios";
let uri = process.env.URI;

// if (!uri) {
//   uri = require("../config");
// }

const Get = params => {
  return axios.get(`${uri}/api/tram`);
};

export default { Get };
