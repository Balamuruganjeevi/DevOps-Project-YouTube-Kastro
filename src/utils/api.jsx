import axios from "axios";
const BASE_URL ='https://zi9jb9iw0k.execute-api.us-east-1.amazonaws.com/Prod'
const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  };
  export const fetchDataFromApi = async(url)=>{
    const{data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }
