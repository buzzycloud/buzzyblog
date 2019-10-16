import axios from "axios";

const { NODE_ENV, API_PROD, API_DEV } = process.env;

const BASE_URL = NODE_ENV === "production" ? API_PROD : API_DEV;

export { axios, BASE_URL };
