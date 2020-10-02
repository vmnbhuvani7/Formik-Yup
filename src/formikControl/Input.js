import React from 'react'

import { ErrorMessage, Field } from 'formik'
import TextError from '../commen/TextError'

const Input = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className="form-group ">
            <label >{label}: </label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input
