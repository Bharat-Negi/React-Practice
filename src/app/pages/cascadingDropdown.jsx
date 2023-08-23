import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import CountryData from '../data-file/allCountryData.json'

export default function SelectDropdown() {
    // const [countryId, setCountryid ] = useState('');
    const [state, setState] = useState([]);
    const [curren, setCurren] = useState([]);
    // const [stateId, setStateid] = useState();

    const handlecountry=(e)=> {
        const getConutryId = e.target.value;
        // console.log(getConutryId);

        const getStatedata = CountryData.find(country => country.name === getConutryId).language;
        setState(getStatedata);

        const getCurrendata = CountryData.find(country => country.name === getConutryId).currency;
        setCurren(getCurrendata);

        //console.log(state);

    }

    return (
        <>
            <Link to="/" className="backtohome">Back to home page</Link>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <FloatingLabel controlId="floatingSelect" label="Country">
                            <Form.Select aria-label="Floating label select example" onChange={(e)=>handlecountry(e)}>
                                <option>Select Country</option>
                                {
                                    CountryData.map((getConutry, index) => (
                                        <option key={index} value={getConutry.name}>{getConutry.name}</option>
                                    ))
                                }
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingSelect" label="Language">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                {
                                    state.map((langu, index)=> (
                                      <option key={index}>{langu.name}</option>  
                                    ))
                                }
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingSelect" label="Currency">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                {
                                    curren.map((curr, index)=> (
                                      <option key={index}>{curr.name}</option>  
                                    ))
                                }
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
            </Container>
        </>
    )
}