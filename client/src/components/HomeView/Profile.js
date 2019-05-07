import React, { Component } from 'react'
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

//This is the action for getting users
import {getUsers} from '../../actions/index'

var Load = styled.div `text-align:center; margin:15%;`;

export default class AccInfo extends Component {

  // componentDidMount() {
  //   this.props.getUsers();}

    

  render() {

  var user = "please hook up auth"

  if(!user){
    return <><Load><Loader 
      type="TailSpin"
      color="#5887F9"
      height="100"	
      width="100"
      /></Load></>;
  }
    return (
      <>
      <Load>this will be the profile page<Loader 
      type="Rings"
      color="#ff8038"
      height="100"	
      width="100"
      />
      <Loader 
      type="Rings"
      color="#ff8038"
      height="100"	
      width="100"
      /><Loader 
      type="Rings"
      color="#ff8038"
      height="100"	
      width="100"
      />
      <Loader 
      type="Rings"
      color="#ff8038"
      height="100"	
      width="100"
      /></Load>;
      </>
    )
  }
}
