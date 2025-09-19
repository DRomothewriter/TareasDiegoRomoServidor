La aplicación es básicamenteun proxy para poder hacer las peticiones a la api de newsapi
desde el servidor.

Las rutas son:
/noticias
/top-headlines
/top-headlines/sources


Para instalar las dependencias: npm i

Crear archivo .env y guardar la Api key en una variable llamada API_KEY.
Para correr el programa: npm run dev

Rutas para probar la tarea:

/noticias:
http://localhost:3000/noticias?q=bitcoin
http://localhost:3000/noticias?q=apple&from=2025-09-18&to=2025-09-18&sortBy=popularity
http://localhost:3000/noticias?domains=techcrunch.com,thenextweb.com
Error: http://localhost:3000/noticias


/top-headlines:
http://localhost:3000/top-headlines?country=us
http://localhost:3000/top-headlines?sources=bbc-news
http://localhost:3000/top-headlines?q=trump
Error: http://localhost:3000/top-headlines

/top-headlines/sources:
http://localhost:3000/top-headlines/sources?
http://localhost:3000/top-headlines/sources?category=business
http://localhost:3000/top-headlines/sources?country=us
