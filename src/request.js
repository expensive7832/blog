const API_KEY = "pub_2497682d174c2cebe696e16d0d325d4810f5";

const request = {
    test: `https://google-news1.p.rapidapi.com/top-headlines/?rapidapi-key=1b73e796c3msh8a55e1c908f94b8p10eb8ajsnf5936f`,
    general: `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en`,
    business: `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=business&language=en`,
    sports: `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=sports&language=en`,
    entertainment: `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=entertainment&language=en`,
    science: `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=science&language=en`,
    health: `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=health&language=en`,
    tech: `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=technology&language=en`,
    politics: `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=politics&language=en`,
}

export default request;

// general: `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=ng`,

//const API_KEY = "pub_2497682d174c2cebe696e16d0d325d4810f5";