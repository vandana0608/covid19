import axios from 'axios';
import { stackOffsetSilhouette } from 'd3';

const url='https://covid19.mathdro.id/api';
const urlstate='https://api.covid19india.org/v2/state_district_wise.json'

export const fetchData=async (country)=>{
    let newUrl=url;

    if(country){
        newUrl=`${url}/countries/${country}`;
    }
    try{
        const{data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(newUrl);
        return {confirmed,recovered,deaths,lastUpdate};
       
    }catch(error){
        return error;
    }
     
}

export const fetchCountries=async()=>{
    try{
        const {data:{countries}}=await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);
    }catch(error){
        return error;
    }
}

