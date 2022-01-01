const API_KEY = "a0bc783c35df4e8fb3f78a585c56c213";

const request = {
    
    general: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
    business: `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=business&language=en`,
    sports: `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=sports&language=en`,
    entertainment: `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=entertainment&language=en`,
    science: `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=science&language=en`,
    health: `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=health&language=en`,
    tech: `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=technology&language=en`,
    politics: `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=politics&language=en`,
}

export default request;
