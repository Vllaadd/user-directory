import React, { Component } from 'react';
import axios from 'axios';

class GptExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=200&nat=us')
      .then(res => {
        this.setState({ user: res.user });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.data.user.map(data => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GptExample;
