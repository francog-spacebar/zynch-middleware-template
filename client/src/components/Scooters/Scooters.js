import React, { Component } from 'react'
import styles from './scooters.module.scss'
import { connect } from 'react-redux'
import axios from 'axios'
import 'moment/locale/es'

class Scooters extends Component {
  render() {
    return <div>Scooters</div>
  }
}

const mapStateToProps = state => {
  return {
    url: state.url,
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Scooters)
