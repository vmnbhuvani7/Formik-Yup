import React from 'react';
import './App.css';

import { useFormik } from 'formik';

const initialValues = {
  name: 'vaman',
  email: '',
  channel: ''
}

const validate = (values) => {
  let errors = {}

  if (!values.name) {
    errors.name = 'requires'
  }
  if (!values.email) {
    errors.email = 'required'
  }
  if (!values.channel) {
    errors.channel = 'required'
  }

  return errors;
}

const onSubmit = (values) => {
  console.log('form data', values);
}

function App() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  // console.log('formik error',formik.errors);
  console.log('visited filed', formik.touched);

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>

        <div className="form-control">
          <label>Name: </label>
          <input
            type='text'
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="name" />
          {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>

        <div className="form-control">
          <label>Email: </label>
          <input
            type='email'
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="email" name="email" />
          {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>

        <div className="form-control">
          <label>Channel: </label>
          <input
            type='text'
            id="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
            className="channel" />
          {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;
