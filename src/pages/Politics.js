import React from 'react'
import request from '../request'
import axios from '../axios'
import { useEffect, useState } from 'react/cjs/react.development';
const Politics = () => {

    const [politics, setpolitics] = useState([]);

    useEffect(() =>{
        const getPolitics = async() =>{
            const res = await axios.get(request.politics);
            setpolitics(res.data.articles);
        }
        getPolitics();
    },[])

    console.log(politics);
    return (
        <div className="politics">
            
        </div>
    )
}

export default Politics
