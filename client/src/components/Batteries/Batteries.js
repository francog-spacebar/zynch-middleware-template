import React, { Component } from 'react'
import styles from './batteries.module.scss'
import { connect } from 'react-redux'
import axios from 'axios'

class Batteries extends Component {
  render() {
    return <div>Batteries</div>
  }
}

const mapStateToProps = state => {
  return {
    url: state.url,
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Batteries)
