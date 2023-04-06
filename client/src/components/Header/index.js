import React from 'react';
import './style.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Logo from '../../assets/gg-logo.png';
import Login from '../../pages/Login';
function Header() {
    return (
        <header>
            <nav>
                <img className="img" src={Logo} alt="project" width="200" height="200"></img>
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                        <Tab>Home</Tab>
                        <Tab>Profile</Tab>
                        <Tab>Games</Tab>
                        <Tab>Gamers</Tab>
                        <Tab>Logout</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>hello</p>
                        </TabPanel>
                        <TabPanel>
                            <p>My profile!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>games!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>gamers!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Destroy session will happen here no page needed</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </nav>
        </header>
    );
}
export default Header;

