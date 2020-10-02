import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup'
import '../App.css';
import TextError from '../commen/TextError'

const RegistrationFormikYup = () => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        comments: '',
        address: '',
        social: {
            facebook: '',
            twitter: ''
        },
        phoneNumber: ['', ''],


    }

    const onSubmit = (values) => {
        console.log("submit data", values);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required !'),
        email: Yup.string().email('Invalid email format')
            .required('Required !'),
        password: Yup.string().required('Required !'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required !'),
    })

    // const validateComments = (values) => {
    //     let errors = {}
    //     if (!values) {
    //         errors = 'Required !'
    //     }
    //     return errors
    // }

    return (
        <div className="container" >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => {
                    // console.log(formik);
                    return (
                        <div className="row">
                            <div className='col-md-6'>
                                <div>
                                    <center> <h1> Student Registration Form </h1> </center>
                                    <Form className="container form-signin">
                                        <div className="form-group ">
                                            <label className="form-label" >Name: </label>
                                            <Field
                                                type="text"
                                                name="name"
                                                className="rounded-pill form-control"
                                            />
                                            <ErrorMessage name="name" component={TextError} />
                                        </div>

                                        <div className="form-group ">
                                            <label className="form-label" >Email: </label>
                                            <Field
                                                name="email"
                                                className="rounded-pill form-control"
                                            />
                                            <ErrorMessage name="email" >
                                                {errorMsg => <div className='error'>{errorMsg}</div>}
                                            </ErrorMessage>

                                            {/* or other metthod */}
                                            {/* <ErrorMessage name="email"  component={TextError} /> */}

                                        </div>

                                        <div className="form-group ">
                                            <label className="form-label" >Password: </label>
                                            <Field
                                                name="password"
                                                type="password"
                                                className="rounded-pill form-control"
                                            />
                                            <ErrorMessage name="password" component={TextError} />
                                        </div>

                                        <div className="form-group ">
                                            <label className="form-label" >Confirm Password: </label>
                                            <Field
                                                name="confirmPassword"
                                                type="password"
                                                className="rounded-pill form-control"
                                            />
                                            <ErrorMessage name="confirmPassword" component={TextError} />
                                        </div>

                                        {/* <div className="form-group ">
                                            <label className="form-label" >Comments: </label>
                                            <Field
                                                as='textarea'
                                                name="comments"
                                                className="rounded-pill form-control"
                                                validate={validateComments}
                                            />
                                            <ErrorMessage name="comments" component={TextError} />
                                        </div> */}

                                        <div className="form-group ">
                                            <label className="form-label" >Facebook Profile: </label>
                                            <Field
                                                name="social.facebook"
                                                type="text"
                                                className="rounded-pill form-control"
                                            />
                                        </div>

                                        <div className="form-group ">
                                            <label className="form-label" >Twitter Profile: </label>
                                            <Field
                                                name="social.twitter"
                                                type="text"
                                                className="rounded-pill form-control"
                                            />
                                        </div>

                                        <div className="form-group ">
                                            <label className="form-label" >phone No 1: </label>
                                            <Field
                                                name="phoneNumber[0]"
                                                type="text"
                                                className="rounded-pill form-control"
                                            />
                                        </div>

                                        <div className="form-group ">
                                            <label className="form-label" >phone No 2: </label>
                                            <Field
                                                name="phoneNumber[1]"
                                                type="text"
                                                className="rounded-pill form-control"
                                            />
                                        </div>


                                        {/* <div className="form-group ">
                                            <label className="form-label" >Address: </label>
                                            <Field
                                                name="address"
                                                type="text"
                                                className="rounded-pill form-control"
                                            >
                                                {
                                                    (props) => {
                                                        const { filed, form, meta } = props
                                                        console.log('Render props', props);
                                                        return (
                                                            <div>
                                                                <input className="rounded-pill form-control" id="address"{...filed} />
                                                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                                            </div>
                                                        )
                                                    }
                                                }
                                            </Field>
                                        </div> */}


                                        <div className="form-group text-center">
                                            <label className="form-label"></label>
                                            {/* <button type="submit" disabled={!(formik.dirty && formik.isValid)} className="btn btn-primary rounded-pill mr-4">Save</button> */}
                                            <button type="submit" disabled={!formik.isValid || formik.isSubmitting} className="btn btn-primary rounded-pill mr-4">Save</button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    )
                }}


            </Formik>
        </div>
    )
}

export default RegistrationFormikYup

