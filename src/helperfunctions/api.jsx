import React from 'react';
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY

export const searchBible = async (bible, searchTerm) =>{
    try{
        const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/${bible}/search`,{
            headers:{
                'api-key':API_KEY,
            },
            params:{
                query: searchTerm,
            },
        });
        /*console.log(response.data)*/
        return response.data;
    }catch (error){
        console.error(error);
        throw error;
    }
}