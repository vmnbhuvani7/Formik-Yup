import React from 'react'

import { ErrorMessage, Field } from 'formik'
import TextError from '../commen/TextError'

const Textarea = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className="form-group ">
            <label >{label}:</label>
            <Field as='textarea' name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea
