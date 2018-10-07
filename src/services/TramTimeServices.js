import axios from "axios";
let uri = process.env.URI;
const DB_URL = process.env.DB_URL;

if (!uri) {
  uri = process.env.DB_URL || require("../config");
}

// uri = require("../config");

const Get = params => {
  return axios.get(`${uri}/api/tram`);
};

export default { Get };
