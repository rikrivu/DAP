import axios from "axios";

export const analysisSubmited=(formdata: any)=>{
        return axios.post(`https://nimbusrestapi.azurewebsites.net/analyse`, formdata, {
          headers: {
            'Content-Type': 'application/json',
           }
        });
      }; 