import React from 'react';
import './style.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Logo from '../../assets/gg-logo.png'


import Home from '../../pages/Home';
import Gamers from '../../pages/Gamers';
import Games from '../../pages/Games';
import Profile from '../../pages/Profile';
import Login from '../../pages/Login';
import Logout from '../../pages/Logout';
import Signup from '../../pages/Signup';

import Auth from '../../utils/auth';

import Logo from '../../assets/gg-logo.png';
import Login from '../../pages/Login';
function Header() {
    
    const isLoggedIn = Auth.loggedIn();

    return (
        <header>
            <img className="img" src={Logo} alt="project" width="200" height="200"></img>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                    <Tab>Home</Tab>
                    <Tab>Profile</Tab>
                    <Tab>Games</Tab>
                    <Tab>Gamers</Tab>   
                    
                    {isLoggedIn ? (
                    <Tab>Logout</Tab>
                    ) : (
                    <Tab>Login</Tab>
                    )}
                    <Tab>Signup</Tab>  
                    

                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Home />
                    </TabPanel>
                    <TabPanel>
                        <Profile />
                    </TabPanel>
                    <TabPanel>
                        <Games />
                    </TabPanel>
                    <TabPanel>
                        <Gamers />
                    </TabPanel>
                    <TabPanel>
                    {isLoggedIn ? (
                        <Logout />
                    ) : (
                        <Login />
                    )}
                    </TabPanel>
                    <TabPanel>
                        <Signup />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </header>
    );
}
export default Header;

