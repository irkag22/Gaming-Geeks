import React from 'react';
import './style.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center, Flex } from '@chakra-ui/react'
import Logo from '../../assets/gg-logo.png'


import Home from '../../pages/Home';
import Gamers from '../../pages/Gamers';
import Games from '../../pages/Games';
import FormikGame from '../../pages/Form';
import Profile from '../../pages/Profile';
import Login from '../../pages/Login';
import Logout from '../../pages/Logout';
import Signup from '../../pages/Signup';

import Auth from '../../utils/auth';

function Header() {

    const isLoggedIn = Auth.loggedIn();

    return (
        <header>
            <Flex direction="column" align="center">

                <img className="img" src={Logo} alt="project" width="200" height="200"></img>

                <Tabs align="center" variant='soft-rounded' colorScheme='green'>
                    <TabList>
                        <Tab key="1">Home</Tab>

                        {isLoggedIn && <Tab key="2">Profile</Tab>}
                        {isLoggedIn &&<Tab key="3">Games</Tab>}
                        {isLoggedIn && <Tab key="4">Chat</Tab>}
                        {isLoggedIn && <Tab key="5">Gamers</Tab>}
                        {isLoggedIn && <Tab key="6">Logout</Tab>}
                        {!isLoggedIn && <Tab key="7">Login</Tab>}
                        {!isLoggedIn && <Tab key="8">Signup</Tab>}
 
                        <Tab key="9">Install</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel key="1"><Home /></TabPanel>

                        {isLoggedIn && <TabPanel key="2"><Profile /></TabPanel>}
                        {isLoggedIn && <TabPanel key="3"><Games /></TabPanel>}
                        {isLoggedIn && <TabPanel key="4"><FormikGame /></TabPanel>}
                        {isLoggedIn && <TabPanel key="5"><Gamers /></TabPanel>}
                        {isLoggedIn && <TabPanel key="6"><Logout /></TabPanel>}
                        {!isLoggedIn && <TabPanel key="7"><Login /></TabPanel>}
                        {!isLoggedIn && <TabPanel key="8"><Signup /></TabPanel>}

                        <TabPanel key="9">
                            {/* <Install /> */}
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Flex>
        </header>
    );
}
export default Header;

