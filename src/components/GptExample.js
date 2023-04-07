import React, { Component } from 'react';
import axios from 'axios';

class GptExample extends Component{
    constructor(props){
        super(props);
        this.state ={
            user: []
        }
    }
componentDidMount(){
    axios.get('https://randomuser.me/api/?results=200&nat=us')
    .then(res => {
        console.log(res.data.results);
    })
}

}

export default GptExample;

