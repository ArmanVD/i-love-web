# Learning Journal

## 11 November 2024

Vandaag gewerkt aan styleguide, gekeken naar de website van Studio Dumbar.

* Bedrijven maken gebruik van stylesheets
* je hebt bedrijven die gericht zijn op het maken van stylesheets
* Hoe complex een stylesheet is

## 13 november 2024

Vandaag gewerkt aan onze stylesheet

* Hoe classes werken op chronologische volgorde
* Hoe je het beste styles kan maken voor buttons/links
* Hoe je code een andere kleur kan geven dan normale tekst

## 14 en 15 November 2024
### Performance.now

Deze 2 dagen ben ik bij performance.now geweest, een conferentie die vooral gericht is op de performance van de website. Deze conferentie is mede-opgericht door Krijn. Via Krijn heb ik ook een kaartje kunnen bemachtigen. Deze dagen is er van alles over de performance van een website besproken. 

Aspecten die veel aan bod kwamen waren:
* FCP (First Contentful Paint): de tijd voordat de gebruiker de eerste inhoud op de site ziet.
* LCP (Largest Contentful Paint): het tijdstip waarop de meeste inhoud op het zichtbare deel van het scherm zichtbaar is.
* FID (First Input Delay): de tijd vanaf de eerste interactie van de gebruiker met interactieve elementen (klikken op een knop, tekst invoeren in een veld, klikken op een link) tot het moment waarop de browser erop begint te reageren.
* TTFB (Time To First Byte): het tijdsinterval vanaf het verzenden van een verzoek naar de hosting, waarop de site zich bevindt, tot de eerste byte aan informatie die als reactie wordt verzonden.
* INP (Interaction to Next Paint): is een indicator van de snelheid van de reactie van de pagina op gebruikersacties die plaatsvinden nadat de site volledig is geladen. Dit is de hoeveelheid tijd die verstrijkt tussen het klikken op een item en het reageren erop.
* TTB (Total Blocking Time): de totale blokkeertijd die verstrijkt vanaf het begin van de inhoudsweergave (FCP) tot de site-interactiviteit (TTI). Gedurende deze periode ziet de gebruiker de inhoud al, maar kan hij nog geen knoppen en andere actieve elementen indrukken.
* CLS (Cumulative Layout Shift): verplaatsing van de baan als gevolg van het laden van zwaardere elementen.
* CWV (Core Web Vitals): de drie kernstatistieken die Google als het belangrijkst beschouwt. Deze omvatten weergave van het grootste deel van de inhoud, tijd tot eerste interactiviteit en cumulatieve inhoudverplaatsing (LCP, FID, CLS).

Dit is nog maar een klein gedeelte van alle informatie die gedeeld is. Ik ga nog een samenvating maken met alle informatie die ik gekregen heb, deze zal ik hierop delen wanneer die af is.

## 18 November 2024

Vandaag zijn we verder gegaan met typografie en hebben we verdere informatie gekregen over diverse CSS Units. Ook hebben we onze eigen font gemaakt. en deze aan onze i-love-web page toegevoegd d.m.v. 

`@font-face {`
    `font-family: 'Crazytime';`
    `src: url('Crazytime.otp') format('opentype');`
`}`

`body {`
    `font-family: 'Crazytime', Arial, sans-serif;`
`}`

De dingen die ik vandaag geleerd heb zijn:
* Hoe je zelf een font download en deze toevoegd op de website
* Hoe je `@font-face` moet gebruiken

Verder ga ik werken aan de website van de opdrachtgever. Bij performance.now heb ik kennis opgedaan hoe je het beste fonts kunt gebruiken op een website om deze zo performant mogelijk te maken.
