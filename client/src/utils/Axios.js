import axios from "axios";
import { baseURL } from "../commom/SummaryApi";

const Axios = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default Axios;
