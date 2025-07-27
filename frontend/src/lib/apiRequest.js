// frontend/src/lib/apiRequest.js
import axios from "axios";

const apiRequest = axios.create({
    baseURL:"http://localhost:8800/api",
    withCredentials:true,
});

 apiRequest.interceptors.response.use(
    (response) => {
        
        return response;
    },
    (error) => {
    
        if (error.response && error.response.status === 401) {
             localStorage.removeItem("user");
            
            window.location.href = "/login";   
        }
        return Promise.reject(error);  
    }
);

export default apiRequest;