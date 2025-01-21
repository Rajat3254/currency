import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://regularly-cry-unauthorized-screensaver.trycloudflare.com/currency-converter?currency=${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        // res[currency] is liye use kiye at the place od res.currency kyoki fetch nhi ho payega res.inr kabhu res.usd nhi change ho payega islliye [] bracket use karte hai
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}
// type js hai kyoki ye js hi return karta hai aur ye ek achi practice hai ki jo return kare woh type do
export default useCurrencyInfo;