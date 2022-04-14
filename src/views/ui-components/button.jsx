import React, { useState } from 'react';
//import { colors } from 'react-select/dist/declarations/src/theme';
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    Input,
    input,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Form,
    DropdownItem
} from 'reactstrap';

import favicon from './Act1/favicon.png';
import { Icon } from '@iconify/react';


    
  
const Buttons = () => {

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
    const toggleMenu = () => {
        document.getElementById('search').classList.toggle();
      
    }


    return (
        <div>
            <Row>
            <Col className="app-search" id="search" >
                <Icon icon="ant-design:search-outlined"  /> 
                &nbsp;&nbsp;&nbsp; <input  type="text" placeholder="Search & Enter" minlength="4" maxlength="8"  /> 
                <section className="one-fourth" id="html">
                        <img src={favicon} />
                    </section>
           
            </Col>
            <Col>
       
            <Card>          
            <br/>
                           
                            <br/> 
                        
                        <CardBody>
                        <br/>
                                    <pre> 
                                        <h2>
                                        &nbsp; WELCOME
                                            </h2>    
                                     </pre>
                            
                            <p>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <br/>
                                <br/>
                                &nbsp; &nbsp; &nbsp; &nbsp; 
                                flen ben foulen
                                <br/>
                                <br/>
                                données de carte: &nbsp; &nbsp; 
                                ***********

                              
                            </p>
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
                            <br/>
                            
                            
                           
                        </CardBody>
                        </Card>
            </Col>
            
            
            
            </Row>

        </div>
    );
}

export default Buttons;



