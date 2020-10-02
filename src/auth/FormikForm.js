import React from 'react'

import { useFormik } from 'formik';

const FormikForm = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    const onSubmit = values => {
        console.log('form data', values);
    }

    const validate = values => {
        let errors = {}
        if (!values.name) {
            errors.name = '* Name is Required'
        }
        if (!values.email) {
            errors.email = '* email is Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = '* password is Required'
        }

        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="container form-signin">
                <div className="form-group ">
                    <label className="form-label" >Name: </label>
                    <input
                        type="text"
                        name="name"
                        className="rounded-pill form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder="Enter Username"
                    />
                    {formik.touched.name && formik.errors.name ? <div style={{ color: "red" }}>{formik.errors.name}</div> : null}
                </div>

                <div className="form-group ">
                    <label className="form-label" >Email: </label>
                    <input
                        name="email"
                        className="rounded-pill form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="Enter Email"
                    />
                    {formik.touched.email && formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
                </div>

                <div className="form-group ">
                    <label className="form-label" >Password: </label>
                    <input
                        name="password"
                        type="password"
                        className="rounded-pill form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        placeholder="Enter Password"
                    />
                    {formik.touched.password && formik.errors.password ? <div style={{ color: "red" }}>{formik.errors.password}</div> : null}
                </div>

                <div className="form-group text-center">
                    <button >Save</button>
                </div>
            </form>
        </div>
    )
}

export default FormikForm

