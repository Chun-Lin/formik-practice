import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup'

const App = ({ values, errors, touched, isSubmitting }) => {
  console.log(touched)
  console.log(errors)
  return (
    <Form className="form">
      <div className="input">
        <Field
          className="field"
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>
      {touched.email &&
        errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      <div className="input">
        <Field
          className="field"
          type="password"
          name="password"
          placeholder="password"
        />
      </div>
      {touched.password &&
        errors.password && (
          <div style={{ color: 'red' }}>{errors.password}</div>
        )}
      <div className="input">
        <Field className="field select" component="select" name="plan">
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </Field>
      </div>

      <div className="input">
        <label className="input">
          <Field
            className="checkbox"
            type="checkbox"
            name="newsletter"
            checked={values.newsletter}
          />
          Join our newsletter
        </label>
      </div>
      <button disabled={isSubmitting}>Submit</button>
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
  handleSubmit(values, { setErrors, resetForm, setSubmitting }) {
    setTimeout(() => {
      if (values.email === 'wulin40063@gmail.com') {
        setErrors({ email: 'The email has been taken!' })
      } else {
        resetForm()
      }
      setSubmitting(false)
    }, 2000)
  },
})(App)

export default FormikApp
