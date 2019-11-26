* RUN PROD APP VERSION:
npm start

* DATA FOR QUERIES

- GET	/news
- GET	/news/1
- POST	/news
{ 
    "category": "general" 
}
- PUT	/news
{
    "id": 7,
    "name":"Google News (India)",
    "description":"Comprehensive, up-to-date India news coverage, aggregated from sources all over the world by Google News.",
    "url":"https://news.google.com",
    "category":"general",
    "language":"en",
    "country":"in"
}
- DELETE /news/7

To raise errors:
- GET	 /news/20
- DELETE /news/20