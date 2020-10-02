import React from 'react'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
    const dropdownOption = [
        { key: 'Select a option', value: '' },
        { key: 'Option 1', value: 'Option 1' },
        { key: 'Option 2', value: 'Option 2' },
        { key: 'Option 3', value: 'Option 3' },
    ]
    const radioOptions = [
        { key: 'Option 1', value: 'Option 1' },
        { key: 'Option 2', value: 'Option 2' },
        { key: 'Option 3', value: 'Option 3' },
    ]
    const checkBoxOptions = [
        { key: 'Option 1', value: 'Option 1' },
        { key: 'Option 2', value: 'Option 2' },
        { key: 'Option 3', value: 'Option 3' },
    ]
    const initialValues = {
        name: '',
        address: '',
        selectOption: '',
        radioOption: '',
        checkBoxOption: [],
        birthDate: null,
        fname: '',
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required !'),
        address: Yup.string().required('Required !'),
        selectOption: Yup.string().required('Required !'),
        radioOption: Yup.string().required('Required !'),
        checkBoxOption: Yup.array().required('Required !'),
        birthDate: Yup.date().required('Required !').nullable(),
        fname: Yup.string().required('Required !'),
    })

    const onSubmit = values => {
        console.log("submit data", values);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => (
                    <Form>
                        <FormikControl
                            control='input'
                            label='Name'
                            type='text'
                            name='name'
                        />

                        <FormikControl
                            control='textarea'
                            label='Address'
                            name='address'
                        />

                        <FormikControl
                            control='select'
                            label='Select A Topic'
                            name='selectOption'
                            options={dropdownOption}
                        />

                        <FormikControl
                            control='radio'
                            label='Radio Topic'
                            name='radioOption'
                            options={radioOptions}
                        />

                        <FormikControl
                            control='checkbox'
                            label='checkBox Topic'
                            name='checkBoxOption'
                            options={checkBoxOptions}
                        />

                        <FormikControl
                            control='date'
                            label='Pick a date'
                            name='birthDate'
                        />

                        <FormikControl
                            control='chakrainput'
                            label='Full name'
                            name='fname'
                        />

                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormikContainer
