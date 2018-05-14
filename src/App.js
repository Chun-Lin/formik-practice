import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup'

const App = ({ values, errors, touched }) => {
  console.log(touched)
  console.log(errors)
  return (
    <Form>
      <div>
        <Field type="email" name="email" placeholder="Email" />
        {touched.email &&
          errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>
      <div>
        <Field type="password" name="password" placeholder="password" />
        {touched.password &&
          errors.password && (
            <div style={{ color: 'red' }}>{errors.password}</div>
          )}
      </div>
      <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
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
      plan: plan || 'free',
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    password: Yup.string()
      .min(9, 'Password must be 9 characters or longer')
      .required('password is required'),
  }),
  handleSubmit(values) {
    console.log(values)
  },
})(App)

export default FormikApp
