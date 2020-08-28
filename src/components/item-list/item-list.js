import React from 'react';

import './item-list.css';
// import SwapiService from '../../services/swapi-services';

export default class ItemList extends React.Component {

  // swapiService = new SwapiService();

  // state = {
  //   peopleList: null
  // };
  // componentDidMount() {
  //   this.swapiService
  //     .getAllPeople()
  //     .then((peopleList) => {
  //       this.setState({
  //         peopleList
  //       });
  //     });
  // }
  state = {
    itemList: null
  };
  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item
      const label = this.props.renderItem(item);
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}>
          {label}
        </li>
      )
    })
  }
  render() {

    const { itemList } = this.state;

    if (!itemList) {
      return (<div>loading haha</div>);
    }
    const items = this.renderItems(itemList)
    return (
      <div className="item-list"  >
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};

