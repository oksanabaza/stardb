import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PersonDetails from '../person-details/person-details';
import ItemList from '../item-list/item-list';
import SwapiService from '../../services/swapi-services';
import PeoplePage from '../people-page/people-page';

export default class App extends React.Component {
  swapiService = new SwapiService
  state = {
    showRandomPlanet: true,
    selectedPerson: 5
  }
  // toggleRandomPlanet = () => { }
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };
  render() {
    return (
      <div>
        <Header />
        {/* {planet} */}
        <button className="btn btn-warning btn-lg">Toggle Random Planet</button>
        <RandomPlanet />
        {/* <PeoplePage /> */}
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>


        </div>
      </div >
    );
  }
};

