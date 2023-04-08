import React, { Component } from 'react';
import axios from 'axios';

class CountriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        this.setState({ countries: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const {countries} = this.state;
    return (
      <div>
        <h1>Countries list</h1>
        <ul>
            {countries.map(country =>(
                <li key={country.id}>{country.name}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default CountriesList;
