import React from 'react';
import {
    Pagination,
    PaginationItem,
    PaginationLink,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';
import { Icon } from '@iconify/react';

const PaginationComponent = () => {
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-trending-down"> </i>
                    TRADING
                </CardTitle>
                <CardBody className="">
                   
                <Row>
                <Col className="app-search" id="search" >
                <Icon icon="ant-design:search-outlined"  /> 
                &nbsp;&nbsp;&nbsp; <input  type="text" placeholder="Search & Enter" minlength="4" maxlength="8"  /> 
                </Col>
                </Row>
                <br/>
                            <br/>                           
                            
                <Row>
                        <Col>
                 
                        <b>
                            <button>
                            <i className="mdi mdi-label-outline"> </i>
                            BUY ACTION
                            </button>  
                        </b>
                        
                        </Col>
                        <Col>
                        
                        <b>
                            <button>
                            <i className="mdi mdi-label"> </i>
                            SELL ACTION
                            </button>  
                        </b>
                        
                        </Col>
                       
                    </Row>
                        
                </CardBody>
            </Card>
            {/* -------------------------------------------------------------------------------- */}
            {/* Row */}
            {/* -------------------------------------------------------------------------------- */}
        </div>





    );
}

export default PaginationComponent;
