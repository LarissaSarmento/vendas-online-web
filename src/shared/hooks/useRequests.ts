import axios from "axios";
import { useState } from "react";

export const useRequests = () => {
    const [loading, setLoading] = useState(false);
   
    const getRequest = async (url: string) =>{
        setLoading(true)
          await axios({
        method: 'get',
        url: url,
        })
        .then((result) => {
            alert(`Fez login ${result.data.accessToken}`);
            return result.data;
        })
        .catch(() =>{
            alert('Erro')
        })
    }

    const postRequest = async (url: string, body: any) =>{
        setLoading(true)
        const returnData = await axios({
        method: 'post',
        url: url,
        data: body,
        })
        .then((result) => {
            alert('Login')
            return result.data;
        })
        .catch(() =>{
            alert('Erro')
        })

        setLoading(false)
        return returnData;
    }

    return {
        loading,
        getRequest,
        postRequest, 
    }
}