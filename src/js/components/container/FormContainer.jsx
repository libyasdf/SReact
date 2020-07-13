import React, { Component } from 'react';
// import ReactDOM from "react-dom";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      title: ''
    });
  }

  render() {
    return (
      <form id="article-form" />
    );
  }
}
export default FormContainer;
