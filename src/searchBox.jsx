import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="ac3d16a7e725976899419fd3b3da00a4";

    let getWeatherInfo= async ()=>{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let responseJson=await response.json();
      let result={
        name:responseJson.name,
        weather:responseJson.weather[0].description,
        temperature:responseJson.main.temp,
        feelslike:responseJson.main.feels_like,
        humidity:responseJson.main.humidity,

      }
      console.log(result);
      return result;
    }


    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit= async(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
       let newInfo=  await getWeatherInfo();
       updateInfo(newInfo);
    }
    
    return (<>

        <form onSubmit={handleSubmit}>
        <TextField
          id="standard-search"
          label="Enter city name"
          type="search"
          variant="standard"
          required
          value={city}
          onChange={handleChange}
        />
            <Button variant="outlined" type='Submit'>Search</Button>
        </form>
        <div> </div>
        </>)
}