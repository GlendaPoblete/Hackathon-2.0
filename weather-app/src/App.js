import React, { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';
import './App.css';

console.log('API KEY from env:', process.env.REACT_APP_OWM_API_KEY);


const INITIAL_CITIES = ['Manila', 'Bern', 'Delhi', 'Lilongwe', 'Islamabad'];
const API_KEY = process.env.REACT_APP_OWM_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

//ASYNC FUNCTION
async function fetchWeatherData(city) {
 const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
 try {
   const response = await fetch(url);
   if (!response.ok) {
     let msg = `HTTP ${response.status}`;
     try {
       const j = await response.json();
       if (j?.message) msg = j.message;
     } catch {}
     throw new Error(msg);
   }
   const data = await response.json();
   return data;
 } catch (error) {
   throw error;
 }
}
