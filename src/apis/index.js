import axios from "axios";

const BASE_URL = process.env.NODE_ENV === "production" ? "http://localhost:8080" : "https://api.guiyumin.com";

export { axios, BASE_URL };
