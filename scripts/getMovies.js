import 'dotenv/config'
import fetch from "node-fetch";

const key = process.env.API_MOVIES_KEY

fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${key}`)
    .then(res => res.json())
    .then(data => console.log(data))
