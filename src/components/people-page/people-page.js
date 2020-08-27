import React from 'react';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details'

export default class PeoplePage extends React.Component {
  state = {
    selectedPerson: 3
  };
  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>

      </div>
    );
  }
}