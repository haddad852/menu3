import { Field } from 'formik';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { Container, Col, Row, Card, CardBody, CardTitle } from 'reactstrap';
import Listuser from './List.user/Listuser'
const LayoutComponent = () => {
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-account-settings"> </i>
            USERS MANAGEMENT
          </CardTitle>
                <CardBody className="">
                    <Row>
                    <Listuser />
                    </Row>
                        













                   
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            
            
        </div>
    );
}

export default LayoutComponent;
