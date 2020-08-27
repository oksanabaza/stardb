import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
ReactDOM.render(<App />, document.getElementById('root'));

// export default class SwapiService {

//   _apiBase = 'https://swapi.dev/api';

//   async getResource(url) {
//     const res = await fetch(`${this._apiBase}${url}`);
//     if (!res.ok) {
//       throw new Error(`Could not fetch ${url}` +
//         `, recieved ${res.status}`)
//     }
//     return await res.json();
//   }
//   async getAllPeople() {
//     const res = await this.getResource(`/people/`);
//     return res.results;
//   }
//   getPerson(id) {
//     return this.getResource(`/people/${id}/`);
//   }
//   getAllPlanets() {
//     return this.getResource(`/planets/`);
//   }
//   getPlanet(id) {
//     return this.getResource(`/planets/${id}/`);
//   }
//   getAllStarships() {
//     return this.getResource(`/starships/`);
//   }
//   getStarship(id) {
//     return this.getResource(`/starships/${id}/`);
//   }
// }
// const swapi = new SwapiService();
// swapi.getPerson(5).then((p) => {
//   console.log(p.name);
// });

