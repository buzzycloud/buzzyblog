import axios from "axios";

const isProd = process.env.NODE_ENV === "production";

const BASE_URL = isProd ? process.env.API_PROD : process.env.API_DEV;

export { axios, BASE_URL };
