import React from 'react';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import swapiService from '../../services/swapi-services';

export default class PeoplePage extends React.Component {
  swapiService = new swapiService();
  state = {
    selectedPerson: 1
  };
  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={(item) => `${item.name} (${item.gender})`} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}