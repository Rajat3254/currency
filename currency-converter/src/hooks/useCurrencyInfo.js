import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    console.log("here i am: ", currency);
    useEffect(() => {
        const fetchData = async () => {
            const reply = await fetch(`https://regularly-cry-unauthorized-screensaver.trycloudflare.com/currency-converter?currency=${currency}`);
            const data = await reply.json();
            console.log("this is data: ", data["inr"])
            setData(data[currency])
        }
        // res[currency] is liye use kiye at the place od res.currency kyoki fetch nhi ho payega res.inr kabhu res.usd nhi change ho payega islliye [] bracket use karte hai
        // console.log(data);
        fetchData();
    }, [currency])
    // console.log(data);
    return data
}
// type js hai kyoki ye js hi return karta hai aur ye ek achi practice hai ki jo return kare woh type do
export default useCurrencyInfo;