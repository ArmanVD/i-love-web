# Learning Journal

## Vrijdag 4 April

### Vragenlijst

* Ik kan uitleggen wat NodeJS is en waarvoor het gebruikt wordt
> 3 punten
* Ik weet wat het doel van package.json is en heb hier aanpassingen in gemaakt
> 2 punten : [Code](https://github.com/ArmanVD/the-web-is-for-everyone-interactive-functionality/blob/db8ffeb475e25c1d58a747346d35616c32cc7363/package.json#L12C21-L12C31)
* Ik heb met npm packages geïnstalleerd en gebruikt in het bestand server.js
> 2 punten : [Code](https://github.com/ArmanVD/the-web-is-for-everyone-interactive-functionality/blob/db8ffeb475e25c1d58a747346d35616c32cc7363/server.js#L1C1-L11C29)
* Ik kan met commando’s in de terminal een NodeJS project stoppen en starten
> 3 punten : `npm start` en `npm run dev`
* Ik weet waarom ik mijn NodeJS project regelmatig moet herstarten en kan dit uitleggen
> 3 punten : Als er aanpassingen zijn in je server.js moet je de server eerst herstarten voordat deze zischtbaar zijn. Ik gebruik `nodemon` om dit automatisch te doen. Nodemon monitort of er een .js bestand wordt opgeslagen, zodra dit gebeurt start die automatisch de server opnieuw op.
* Ik heb een strategie voor debuggen in NodeJS
> 2 punten : Ik probeer veel gebruik te maken van [console.log](https://github.com/ArmanVD/the-web-is-for-everyone-interactive-functionality/blob/db8ffeb475e25c1d58a747346d35616c32cc7363/server.js#L72C3-L73C56), zodat ik kan zien wat er eventueel misgaat. Soms bergijp ik alleen niet heel goed wat er precies misgaat. 
* Ik kan uitleggen wat Express.js doet en waarom het nodig is om met NodeJS een website te bouwen
> 1 punt : Ik weet dat het een framework is en dat die essentieel is voor de website. Ik weet alleen niet zo goed wat deze beter doet dan anderen, en/of dat dit de enige framework is die gebruikt kan worden met liquid
* Ik weet wat routes zijn en kan zelf een nieuwe route aanmaken
> 3 punten : [Code](https://github.com/ArmanVD/the-web-is-for-everyone-interactive-functionality/blob/db8ffeb475e25c1d58a747346d35616c32cc7363/server.js#L41) 
* Ik weet wat request en response argumenten zijn in een functie voor het laden van data
> 2 punten : Ik begrijp dat je een request doet aan de server en daar een response terug van wil krijgen
* Ik heb gebruik gemaakt van een request parameter om specifieke data te laden
> 3 punten : [Code](https://github.com/ArmanVD/the-web-is-for-everyone-interactive-functionality/blob/db8ffeb475e25c1d58a747346d35616c32cc7363/server.js#L71)
* Ik kan uitleggen wat Liquid doet en waarom het nodig is om met Express.js een website te maken
> 3 punten : Liquid is de template engine, hier kan je de opgehaalde data dynamisch in opvragen. 
* Ik weet hoe ik data naar Liquid verstuur om dit te gebruiken bij het renderen van een pagina
> 3 punten : [Code](https://github.com/ArmanVD/the-web-is-for-everyone-interactive-functionality/blob/main/views/index.liquid)
* Ik weet hoe ik Liquid filters toe kan passen en waar ik kan vinden hoe die werken
> 3 punten : [Code](https://github.com/ArmanVD/the-web-is-for-everyone-interactive-functionality/blob/db8ffeb475e25c1d58a747346d35616c32cc7363/views/radio-template.liquid#L4)
* Ik heb een nieuwe route gemaakt en nieuwe data meegegeven aan een Liquid view
> 3 punten : [Code](https://github.com/ArmanVD/the-web-is-for-everyone-interactive-functionality/blob/db8ffeb475e25c1d58a747346d35616c32cc7363/server.js#L41)
* Ik weet waar een foreach loop voor gebruikt wordt en pas het toe in een Liquid view om HTML te renderen
> 2 punten : [Code](https://github.com/ArmanVD/the-web-is-for-everyone-interactive-functionality/blob/db8ffeb475e25c1d58a747346d35616c32cc7363/views/radio-template.liquid#L117)
* Ik kan in Liquid een controle maken waarmee een image niet getoond wordt als deze niet in de database is ingevuld
> 1 punt
* Ik heb een strategie voor debuggen in Liquid
> 3 punten
* Ik kan data fetchen uit een REST API
> 3 punten
* Ik snap het verschil tussen HTTP requests van de methodes GET en POST
> 3 punten
* Ik kan data uit een REST API filteren of sorteren
> 3 punten
* Ik snap wat het async keyword doet in JavaScript code
> 2 punten
* Ik weet wat het doel is van een try/catch block en kan het gebruiken bij het parsen van JSON
> 3 punten
* Ik begrijp het verschil tussen client-side JavaScript en server-side JavaScript en wanneer ik welke het handigst in kan zetten
> 3 punten
* Ik kan formulier data die is ge-POST opslaan in een variabele op de server en gebruiken bij het renderen van een pagina
> 1 punt
* Ik kan formulier data die is ge-POST door middel van een POST of PATCH HTTP request opslaan in de REST API
> 1 punt