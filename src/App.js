import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup'

const App = ({ values, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="password" />
      <button>Submit</button>
    </Form>
  )
}

const FormikApp = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || '',
    }
  },
  handleSubmit(values) {
    console.log(values)
  },
})(App)

export default FormikApp
