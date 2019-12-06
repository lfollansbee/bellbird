import React, { Component } from 'react'
import api from '../api'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chirps: []
    }
  }

  componentDidMount = async () => {
    await api.getAllChirps().then(res => {
      this.setState({
        chirps: res.data.data,
      })
    })
  }

  render() {
    const { chirps } = this.state;
    return (
      <div>
        <h1>Chirps</h1>
        <ul>
          {chirps && chirps.map((chirp, index) => {
            return <li key={index}>{chirp.text}</li>
          })}
        </ul>
      </div>
    )
  }
}