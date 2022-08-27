import axios from "axios"

//https://api.themoviedb.org/3/movie/popular?api_key=524b5482c573759992765668e997e0de&language=pt-BR&page=1 

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api