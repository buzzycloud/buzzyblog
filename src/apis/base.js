import axios from "axios";

const BASE_URL = process.env.NODE_ENV === "production" ? "https://api.guiyumin.com" : "http://localhost:8080";

export { axios, BASE_URL };
