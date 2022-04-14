import React, { useState } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    Tooltip,
    Button,
    Col,
    Row, input,
    Table,
    CardSubtitle,
    ButtonGroup
} from 'reactstrap';


const TooltipComponent = () => {
    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState(null);

    const onRadioBtnClick = (rSelected) => {
        setRSelected(rSelected);
    }

    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
            cSelected.push(selected);
        } else {
            cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    }


    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-currency-usd"> </i>
                    CURRENCY MANAGEMENT 
                </CardTitle>
                <CardBody className="">
                    <Row>
                                 &nbsp; &nbsp; &nbsp; &nbsp;
                                Choose your currency:                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <br/>
                                <br/>
                                  
                                &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
                              

                                <Button
                                    color="primary"
                                    onClick={() => onCheckboxBtnClick("Bitcoin")}
                                    active={cSelected.includes("Bitcoin")}
                                    className='mdi mdi-currency-btc'
                                >
                                    Bitcoin
                                </Button>
                                <br/>
                                <br/>
                                <Button
                                    color="primary"
                                    onClick={() => onCheckboxBtnClick("EUR")}
                                    active={cSelected.includes("EUR")}
                                    className='mdi mdi-currency-eur'
                                >
                                    EUR
                                </Button>
                                <br/>
                                <br/>
                                <Button
                                    color="primary"
                                    onClick={() => onCheckboxBtnClick("GBP")}
                                    active={cSelected.includes("GBP")}
                                    className='mdi mdi-currency-gbp'
                                >
                                    GBP
                                </Button>
                                <br/>
                                <br/>
                                <Button
                                    color="primary"
                                    onClick={() => onCheckboxBtnClick("USD")}
                                    active={cSelected.includes("USD")}
                                    className='mdi mdi-currency-usd'
                                >
                                    USD
                                </Button>
                                <br/>
                                <br/>
                                &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
                            <p className="mb-0">
                            <br/>
                                Selected: {JSON.stringify(cSelected)}
                            </p>
                        
                    </Row>
                    <Row>
                 
                           
                    </Row>
     
               
                    <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>                <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                
                
                        
                </CardBody>
            </Card>
            {/* -------------------------------------------------------------------------------- */}
            {/* Row */}
            {/* -------------------------------------------------------------------------------- */}
        </div>
    );
}

export default TooltipComponent;
