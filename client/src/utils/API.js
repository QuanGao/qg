import axios from "axios";

export default {
    submitMessage: (content) => axios.post("/contact/submit", content),

    getProjectData: () => axios.get("/project"),

    getSProjectData: () => axios.get("/project/solo"),

    getTProjectData: () => axios.get("/project/team"),

    getOneProjectData: (projectId) => axios.get(`/project/id/${projectId}`),

    likeProject: (projectId) => axios.put(`/project/like/${projectId}`),

    unlikeProject: (projectId) => axios.put(`/project/unlike/${projectId}`),

    starProject: (projectId) => axios.put(`/project/star/${projectId}`),

    unstarProject: (projectId) => axios.put(`/project/unstar/${projectId}`),

    getNoteData: () => axios.get("/note"),

    saveNote: (projectId,content) => axios.post(`/note/${projectId}`, content)  
}