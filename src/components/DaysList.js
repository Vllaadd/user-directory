import React, { Component } from 'react';
import axios from 'axios';

class DaysList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: []
    };
  }

  componentDidMount() {
    axios.get('/api/days')
      .then(response => {
        this.setState({ days: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const {days} = this.state;
    return (
      <div>
        <h1>Days list</h1>
        <ul>
            {days.map(day =>(
                <li key={day.id}>{day.name}</li>
            ))}
        </ul>
      </div>>
    );
  }
}

export default DaysList;
