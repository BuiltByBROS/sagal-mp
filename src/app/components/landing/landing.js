import React from 'react';
import axios from "axios";

import PurchaseForm from "../form/form";

import "./landing.scss";

export default class Landing extends React.Component {

  submitForm = (values) => {
    axios({
      method:'post',
      url: "/api/comprar"
    })
    .then((res) => {
      window.location = res.data;
    })
    .catch((err) =>{
      debugger;
    })
  }

  render() {
    return (
      <div className='form-container'>
        <PurchaseForm submitForm={this.submitForm} />
      </div>
    );
  }
}
