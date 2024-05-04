import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./searchBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        name:"wonderland",
    weather:"haze",
    temperature:23.95,
    feelslike:23.11,
    humidity:27,
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (<div>

        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <br /><br />
        <InfoBox printableInfo={weatherInfo}/>
    
    </div>)
}