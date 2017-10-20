import React from 'react';
import axios from "axios";

import PurchaseForm from "../form/form";

import "./landing.scss";

export default class Landing extends React.Component {

  constructor() {
    super();
    this.state = {
      renderButtons: true
    }
  }

  submitForm = (values) => {
    this.setState({renderButtons: false});
    axios({
      method:'post',
      data: values,
      url: `/api/comprar/${this.props.route.item}`
    })
    .then((res) => {
      window.location = res.data;
    })
    .catch((err) =>{
      window.location = "/error";
    })
  }

  render() {
    return (
      <div className='form-container'>
        <PurchaseForm
          submitForm={this.submitForm}
          renderButtons={this.state.renderButtons}
          item={this.props.route.item}
          title={this.props.route.title}
          intro={this.props.route.intro}
        />
      </div>
    );
  }
}
