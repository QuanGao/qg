import axios from "axios";

export default {
    submitMessage: (content) => axios.post("/contact/submit", content),
   
}