import React, { Component } from 'react'
import styles from './searchUser.module.scss'
import { connect } from 'react-redux'
import axios from 'axios'

class SearchUser extends Component {
  render() {
    return <div>Search User</div>
  }
}

const mapStateToProps = state => {
  return {
    url: state.url,
    notification: state.notification
  }
}

export default connect(mapStateToProps)(SearchUser)
