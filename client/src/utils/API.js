import axios from "axios";

export default {
    submitMessage: (content) => axios.post("/submit", content),
   
}