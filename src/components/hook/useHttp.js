import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url,config) {
    const response = await fetch(url,config);

    const resData = await response.json();

    if(!response.ok){
        throw new Error(
        resData.message || 'failed to send request'
        );
    }
    return resData;
}

export default function useHttp(url,config,initialData){
    const [data,setData] = useState(initialData);
    const [isLoding,setIsLoding] =useState(false);
    const [error,setError] = useState('');

    const sendRequest = useCallback( async function sendRequest (data){
        setIsLoding(true);
        try{
     const resData = await sendHttpRequest(url,{...config, body:data});
     setData(resData);
        }catch(error){
            setError(error.message || 'somthing went wrong');
        }
        setIsLoding(false);
    },[url,config])

    useEffect(() => {
        if(config && (config.method === 'GET' || !config.method)){
        sendRequest();
        }
    },[sendRequest,config]);

    return{
        data,
        isLoding,
        error,
        sendRequest
    };
}