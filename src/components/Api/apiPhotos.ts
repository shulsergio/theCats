import axios from "axios";
import { Response } from "./types";


export const fetchPhotoItems = async ():Promise<Response> => {
    // const API_KEY = "Ulive_2akpYqZpoBnaEBbltgj0wiRpds4jhfSkDgA6ggUWerXfV1aN9jeGBccfnpWXiAbp";
    const photos = 10;
 

 const response = await axios.get(
  `https://api.thecatapi.com/v1/images/search?limit=${photos}&mime_types=jpg&api_key=live_2akpYqZpoBnaEBbltgj0wiRpds4jhfSkDgA6ggUWerXfV1aN9jeGBccfnpWXiAbp`);
    console.log("Response data:", response.data);

      return response.data;
};
