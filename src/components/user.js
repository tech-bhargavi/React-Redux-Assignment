import React, { Component } from 'react';
import {connect} from 'react-redux'

class user extends Component{


render(){
  return (
    <div>
      <h1>User Data</h1>
      <h2>First Name:{this.props.formData.fName}</h2>
      <h2>Last Name:{this.props.formData.lName}</h2>
      <h2>Email:{this.props.formData.email}</h2>
      <h2>Password:{this.props.formData.pwd}</h2>
    </div>
  );
}

}

// Map application state to props of the current componenet
const mapStatetoProps=(state)=>{
return {
  formData:state
}
}

export default connect(mapStatetoProps)(user);
