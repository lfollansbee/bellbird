import React, { Component } from 'react'
import api from '../api'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chirps: [],
      chirpValue: '',
    }
  }

  componentDidMount = () => {
    this.getAllChirps()
  }

  getAllChirps = async () => {
    await api.getAllChirps()
      .then(res => {
        this.setState({
          chirps: res.data.data,
        })
      })
  }

  handleChange = (event) => {
    this.setState({ chirpValue: event.target.value });
  }

  handleSubmit = (event) => {
    api.postNewChirp(this.state.chirpValue).then(res => {
      if (res.data.success) {
        this.setState({chirpValue: ''})
        this.getAllChirps();
      }
    })
    event.preventDefault();
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
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="standard-basic"
            label="New Chirp"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Button
            disabled={!this.state.chirpValue}
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Chirp
          </Button>
        </form>
      </div>
    )
  }
}