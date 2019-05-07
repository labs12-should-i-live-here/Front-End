import React, { Component } from 'react'
import {getUsers} from '../../actions/index'

export default class AccInfo extends Component {

  componentDidMount() {
    this.props.getUsers();}

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
