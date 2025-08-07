import { useState, useEffect } from "react"

function useCurrencyInfo (currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
        .then((resp)=>(resp.json()))
        .then((resp)=>(setData(resp[currency])))
    },[currency])
    console.log('api data after use effect', data);
    return data
}

export default useCurrencyInfo