# Learning Journal

## Woensdag 12 maart

### Opdracht 1 

* Experiment 1 : https://fdnd.directus.app/items/person/?fields=name&sort=name
* Experiment 2 : https://fdnd.directus.app/items/person/?fields=name&sort=name&filter[name][_starts_with]=D
* Experiment 3 : https://fdnd.directus.app/items/person/?fields=name&sort=name&filter[_or][0][name][_starts_with]=D&filter[_or][1][name][_starts_with]=K
* Experiment 4 : https://fdnd.directus.app/items/person/?fields=name,birthdate&sort=name&filter[birthdate][_nnull]
* Experiment 5 : https://fdnd.directus.app/items/person/?fields=name,birthdate&sort=name&filter[year(birthdate)][_eq]=2002
* Experiment 6 : https://fdnd.directus.app/items/person/?fields=name,fav_tag&filter[fav_tag][_nnull]