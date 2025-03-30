import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const {
  SERP_API_KEY,
} = process.env;

let data = JSON.stringify({
  "q": "site:linkedin.com/in data engineering united states",
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://google.serper.dev/search',
  headers: { 
    'X-API-KEY': SERP_API_KEY, 
    'Content-Type': 'application/json'
  },
  data : data
};

async function makeRequest() {
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
  }
  catch (error) {
    console.log(error);
  }
}

makeRequest();
