import axios from "axios"

//base url for our API 
export default axios.create({
  baseURL: "http://localhost:3005/api/v1/games"});