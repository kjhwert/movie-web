import axios from "axios";

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/"
})

api.interceptors.request.use(config => {
    config.params = config.params || {};
    config.params['api_key'] = "9da9ca3b8cf9ec3768fc312809cd7946";
    config.params['language'] = "en-US";
    return config;
})

export const movieApi = {
    search : (term) => api.get("search/movie", {
        params : {
            query : encodeURIComponent(term)
        }
    }),
    nowPlaying : () => api.get("movie/now_playing"),
    upComing : () => api.get("movie/upcoming"),
    popular : () => api.get("movie/popular"),
    movieDetail : (id) => api.get(`movie/${id}`, {
        params : {
            append_to_response : "videos"
        }
    })
}

export const tvApi = {
    search : (term) => api.get("search/tv", {
        params : {
            query : encodeURIComponent(term)
        }
    }),
    topRated : () => api.get("tv/top_rated"),
    popular : () => api.get("tv/popular"),
    airingToday : () => api.get("tv/airing_today"),
    tvDetail : (id) => api.get(`tv/${id}`, {
        params : {
            append_to_response : "videos"
        }
    })
}