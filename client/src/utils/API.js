import axios from "axios";

export default {
    submitMessage: (content) => axios.post("/contact/submit", content),
    getProjectData: () => axios.get("/project"),
    getSProjectData: () => axios.get("/project/solo"),
    getTProjectData: () => axios.get("/project/team"),
    likeProject: () => axios.put("/project/like/:projectId"),
    unlikeProject: () => axios.put("/project/unlike/:projectId"),
    starProject: () => axios.put("/project/star/:projectId"),
    unstarProject: () => axios.put("/project/unstar/:projectId"),
    getNoteData: () => axios.get("/note"),
    saveNote: (content) => axios.post("/note/:projectId", content)  
}