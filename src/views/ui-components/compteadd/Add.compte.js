import React from 'react';
import { Formik, Field, Form } from 'formik';
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import * as Yup from 'yup';
import { Icon } from '@iconify/react';

const Ajoutcompte = () => {

    return (
        <Row>
            <Col xs="12" md="12">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <Icon icon="bxs:log-in-circle" />
                        SIGN UP
                    </CardTitle>
                    <CardBody className="">
                        <Formik
                            initialValues={{ cin:'', firstname: '', lastname: '', email: '', address: '', number:'', password:''}}
                            onSubmit={(values, { setSubmitting, resetForm }) => {

                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    axios.post('http://localhost:3003/compte/ajout', values).then((Response) => {
                                        console.log(Response)
                                        alert("add succeful")
                                        resetForm();

                                    }).catch(e => {
                                        alert(e)
                                    })
                                }, 1000);
                            }}
                            validationSchema={Yup.object({
                                cin: Yup.string()
                                    .required('cin must be required'),
                                firstname: Yup.string()
                                    .max(15, 'Must be 15 characters or less')
                                    .required('Firstname is required'),
                                lastname: Yup.string()
                                    .max(15, 'Must be 15 characters or less')
                                    .required('Lastname is required'),
                                email: Yup.string()
                                    .email('Invalid email address')
                                    .required('Email is required'),
                                address: Yup.string()
                                    .max(15, 'Must be 15 characters or less')
                                    .required('Address is required'),
                                number: Yup.string()
                                    .required('Phone number is required'),
                                password: Yup.string()
                                    .required('Password is required'),
                               
                                
                            })}
                        >
                            {(formik, isSubmitting) => (
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="cin">CIN</label>
                                        <Field name="cin" className={(formik.touched.cin && formik.errors.cin) ? 'form-control is-invalid' : 'form-control'} type="text" />
                                        {formik.touched.cin && formik.errors.cin ? (
                                            <div className="invalid-feedback">{formik.errors.cin}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="firstname">Firstname</label>
                                        <Field name="firstname" className={(formik.touched.firstname && formik.errors.firstname) ? 'form-control is-invalid' : 'form-control'} type="text" />
                                        {formik.touched.firstname && formik.errors.firstname ? (
                                            <div className="invalid-feedback">{formik.errors.firstname}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">Lastname</label>
                                        <Field name="lastname" className={(formik.touched.lastname && formik.errors.lastname) ? 'form-control is-invalid' : 'form-control'} type="text" />
                                        {formik.touched.lastname && formik.errors.lastname ? (
                                            <div className="invalid-feedback">{formik.errors.lastname}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <Field name="email" className={(formik.touched.email && formik.errors.email) ? 'form-control is-invalid' : 'form-control'} type="email" />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="invalid-feedback">{formik.errors.email}</div>
                                        ) : null}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <Field name="address" className={(formik.touched.address && formik.errors.address) ? 'form-control is-invalid' : 'form-control'} type="address" />
                                        {formik.touched.address && formik.errors.address ? (
                                            <div className="invalid-feedback">{formik.errors.address}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="number">Phone number</label>
                                        <Field name="number" className={(formik.touched.number && formik.errors.number) ? 'form-control is-invalid' : 'form-control'} type="text" />
                                        {formik.touched.number && formik.errors.number ? (
                                            <div className="invalid-feedback">{formik.errors.number}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field name="password" className={(formik.touched.password && formik.errors.password) ? 'form-control is-invalid' : 'form-control'} type="password" />
                                        {formik.touched.password && formik.errors.password ? (
                                            <div className="invalid-feedback">{formik.errors.password}</div>
                                        ) : null}
                                    </div>
                                    <p>
                                    &nbsp; By pressing Sign Up, you agree to our Terms and Conditions, <br/>
                                    &nbsp; Data Use Policy and Cookies Policy. <br/>
                                    &nbsp; You may receive text notifications from us and you can unsubscribe at any time.<br/>
                                    </p>

                                    <div className="form-group">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "SIGN UP"}</button>
                                    </div>
                                   
                                </Form>
                            )
                            }
                        </Formik >
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Ajoutcompte;