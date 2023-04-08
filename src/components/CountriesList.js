import React, { Component } from 'react';
import axios from 'axios';

class CountriesList extends Component {
    state = {
      countries: []
    };

  componentDidMount() {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countries = response.data;
        this.setState({ countries });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { countries } = this.state;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Capital</th>
              <th>Population</th>
              <th>Region</th>
            </tr>
          </thead>
        <tbody>
        {countries.map(country =>(
                <tr key={country.name.common}>
                  <td>{country.name.common}</td>
                  <td>{country.capital}</td>
                  <td>{country.population}</td>
                  <td>{country.region}</td>
                  </tr>
            ))}
       </tbody>
       </table>
       </div>
    );
  }
}

export default CountriesList;
