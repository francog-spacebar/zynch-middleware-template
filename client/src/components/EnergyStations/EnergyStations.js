import React, { Component } from 'react'
import styles from './energyStations.module.scss'
import { connect } from 'react-redux'
import axios from 'axios'

class EnergyStations extends Component {
  render() {
    return <div>Energy Stations</div>
  }
}

const mapStateToProps = state => {
  return {
    url: state.url,
    notification: state.notification
  }
}

export default connect(mapStateToProps)(EnergyStations)
