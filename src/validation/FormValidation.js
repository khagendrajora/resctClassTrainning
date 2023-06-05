import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormValidation = () => {
    return (
<>
        <Formik
            initialValues={{ FirstName: '', lastName: 'Jora', email: '', password: '', cpassword: ''}}
            validationSchema={Yup.object({
                FirstName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('FirstName is mandatory'),

                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('lastName is mandatory'),

                email: Yup.string()
                    .email('invalid email format must include @ and .')
                    .required('email is mandatory'),

                password: Yup.string()
                    .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[*&#@.?!])[A-Za-z\d*&#@.?!]{8,}$/, 'must contain 8 characters,one uppercase,one lowercase,one digit and  one special character like @#&')
                    .required('password is mandatory'),

                cpassword: Yup.string()
                    .required('confirm password is mandatory')
                    .oneOf([Yup.ref('password'),null],'password and cpassword  must be same'),
                     
                    address:Yup.string()
                    .required('address is needed')
                    
            })}>
            <div className='d-flex justify-content-center'>
                <div className='col-md-6 shadow'>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='FirstName'>FirstName</label>
                            <Field type='text' name='FirstName' id='FirstName'
                                className='form-control' />
                            <ErrorMessage name='FirstName'>
                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='lastName'>lastName</label>
                            <Field type='text' name='lastName' id='lastname'
                                className='form-control' />
                            <ErrorMessage name='lastName'>
                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email'>Email</label>
                            <Field type='text' name='email' id='email'
                                className='form-control' />
                            <ErrorMessage name='email'>
                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'>Password</label>
                            <Field type='password' name='password' id='password'
                                className='form-control' />
                            <ErrorMessage name='password'>
                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='cpassword'>CPassword</label>
                            <Field type='password' name='cpassword' id='cpassword'
                                className='form-control' />
                            <ErrorMessage name='cpassword'>
                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='address'>Address</label>
                            <Field type='text' name='address' id='address'
                                className='form-control' />
                            <ErrorMessage name='address'>
                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <button className='btn btn-primary'>Register</button>
                        </div>
                    </Form>
                </div>
            </div>
        </Formik>

        </>

    )
}

export default FormValidation