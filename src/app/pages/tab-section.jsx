import { Link } from 'react-router-dom'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TabSection() {
    const [key, setKey] = useState('home');

    return (
        <>
            <Link to="/" className="backtohome">Back to home page</Link>

            <Container className="mt-5">
                <div className='tabSectionclass'>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="home" title="Home">
                            Tab content for Home
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            Tab content for Profile
                        </Tab>
                        <Tab eventKey="contact" title="Contact" disabled>
                            Tab content for Contact
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </>
    )
}

export default TabSection;