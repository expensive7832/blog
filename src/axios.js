 import axios from "axios";

 const Instance = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
 });

 export default Instance;