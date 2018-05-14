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
      <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter}/>
        Join our newsletter
      </label>
      <Field component="select" name="plan">
        <option value="free">Free</option>
        <option value="premium">Premium</option>
      </Field>
      <button>Submit</button>
    </Form>
  )
}

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || false,
      plan: plan || 'free'
    }
  },
  handleSubmit(values) {
    console.log(values)
  },
})(App)

export default FormikApp
