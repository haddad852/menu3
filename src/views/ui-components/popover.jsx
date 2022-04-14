import React, { useState } from 'react';
import {
    Button,
    Popover,
    PopoverHeader,
    PopoverBody,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    CardText,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter, Table

} from 'reactstrap';
import { Icon } from '@iconify/react';
//import Table from 'react-bootstrap/Table'

const PopoverItem = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <span>
            <Button className="mr-1" color="secondary" id={`Popover-${props.id}`} onClick={toggle.bind(null)}>
                {props.item.text}
            </Button>
            <Popover placement={props.item.placement} isOpen={popoverOpen} target={`Popover-${props.id}`} toggle={toggle.bind(null)}>
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
            </Popover>
        </span>
    );
}

const PopoverComponent = () => {
    const popovers = [
        {
            'placement': 'top',
            'text': 'Top'
        },
        {
            'placement': 'bottom',
            'text': 'Bottom'
        },
        {
            'placement': 'left',
            'text': 'Left'
        },
        {
            'placement': 'right',
            'text': 'Right'
        }
    ];

    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <CardTitle className="mdi mdi-cards-outline">&nbsp; &nbsp; &nbsp; ACTIONS MANAGEMENT</CardTitle>
            <Row>
               
              
                <Col>
                <Card>          
                        <CardBody>           
                            <Table responsive="sm">
                                <thead>
                                <tr>
                                    <th>Name action</th>
                                    <th className='mdi mdi-percent'>Variation 24hours ago </th>
                                    <th className='mdi mdi-currency-eur'>Buy</th>
                                    <th className='mdi mdi-currency-eur'>Sell</th>
                                    <th>Delete action</th>
                                    <th>Add action</th>
                                    <th>Update action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><CardTitle>TSLA</CardTitle> <CardSubtitle>Tesla Monitor,Inc.</CardSubtitle></td>
                                    <td className='mdi mdi-arrow-up'>33.6%</td>
                                    <td>904.13</td>
                                    <td>905.12</td>
                                    <td><button className="btn-link srh-btn, mdi mdi-delete "></button> </td>
                                    <td><button className="btn-link srh-btn, mdi mdi-tooltip-outline-plus"></button> </td>
                                    <td><button className="btn-link srh-btn, mdi mdi-update"></button> </td>                           
                                     </tr>
                                <tr>
                                    <td><CardTitle>NVDA</CardTitle> <CardSubtitle>NVIDIA Corporation</CardSubtitle></td>
                                    <td className='mdi mdi-arrow-down'>16.87%</td>
                                    <td>264.21</td>
                                    <td>264.95</td>
                                    <td><button className="btn-link srh-btn, mdi mdi-delete "></button> </td>
                                    <td><button className="btn-link srh-btn, mdi mdi-tooltip-outline-plus"></button> </td>
                                    <td><button className="btn-link srh-btn, mdi mdi-update"></button> </td>
                                </tr>
                                <tr>
                                    <td><CardTitle>AAPL</CardTitle> <CardSubtitle>Apple</CardSubtitle></td>
                                    <td className='mdi mdi-arrow-up'>10.25%</td>
                                    <td>163.5</td>
                                    <td>165.2</td>
                                    <td><button className="btn-link srh-btn, mdi mdi-delete "></button> </td>
                                    <td><button className="btn-link srh-btn, mdi mdi-tooltip-outline-plus"></button> </td>
                                    <td><button className="btn-link srh-btn, mdi mdi-update"></button> </td>                                </tr>
                                </tbody>
                            </Table>
                           
                      
                           
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

export default PopoverComponent;
