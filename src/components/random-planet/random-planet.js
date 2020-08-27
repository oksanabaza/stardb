import React from 'react';
import './random-planet.css';
import planet from './img/planet.jpg';
import SwapiService from '../../services/swapi-services';
import Loader from './img/loader.gif';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class RandomPlanet extends React.Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);

  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }


  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const loader = loading ? <img className="loader" src={Loader} width="150px" height="100px" /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    // if (loading) {
    //   return (
    //     <div>
    //       <img src={Loader} width="150px" height="100px" />
    //     </div>
    //   )
    // }
    return (
      <div className="RandomPlanet" >
        {errorMessage}
        {loader}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, population, rotationPeriod, diameter, name } = planet;
  return (
    <React.Fragment>
      <div className="planet-image card">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <ul>
          <li>
            <span className="population">Population </span>
            <span>{population}</span>
          </li>
          <li>
            <span className="rotation">Rotation </span>
            <span>{rotationPeriod}</span>
          </li>
          <li>
            <span className="diameter">Diameter </span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};