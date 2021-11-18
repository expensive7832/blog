const API_KEY = "a0bc783c35df4e8fb3f78a585c56c213";

const request = {
    general: `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${API_KEY}`,
    business: `https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=${API_KEY}`,
    sports: `https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=${API_KEY}`,
    entertainment: `https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=${API_KEY}`,
    science: `https://newsapi.org/v2/top-headlines?country=ng&category=science&apiKey=${API_KEY}`,
    health: `https://newsapi.org/v2/top-headlines?country=ng&category=generalhealth&apiKey=${API_KEY}`,
    tech: `https://newsapi.org/v2/top-headlines?country=ng&category=technology&apiKey=${API_KEY}`,
    politics: `https://newsapi.org/v2/top-headlines?country=ng&category=politics&apiKey=${API_KEY}`,
}

export default request;