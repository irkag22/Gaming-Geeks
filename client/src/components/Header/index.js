import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center, Flex } from '@chakra-ui/react';
import Logo from '../../assets/gg-logo.png';

import Home from '../../pages/Home';
import Gamers from '../../pages/Gamers';
import Games from '../../pages/Games';
import FormikGame from '../../pages/Form';
import Profile from '../../pages/Profile';
import Login from '../../pages/Login';
import Logout from '../../pages/Logout';
import Signup from '../../pages/Signup';

import Auth from '../../utils/auth';

import './style.css';

function Header() {
  const isLoggedIn = Auth.loggedIn();

  return (
    <header>
      <Flex direction="column" align="center">
        <img className="img" src={Logo} alt="project" width="200" height="200"></img>

        <Tabs align="center" variant='soft-rounded' colorScheme='cyan'>
          <TabList className="white-tabs">
            <Tab>Home</Tab>
            <Tab>Profile</Tab>
            <Tab>Games</Tab>
            <Tab>Chat</Tab>
            <Tab>Gamers</Tab>
            {isLoggedIn ? <Tab>Logout</Tab> : <Tab>Login</Tab>}
            <Tab>Signup</Tab>
            <Tab>Install</Tab>
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
              <FormikGame />
            </TabPanel>
            <TabPanel>
              <Gamers />
            </TabPanel>
            <TabPanel>{isLoggedIn ? <Logout /> : <Login />}</TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
            <TabPanel>{/* <Install /> */}</TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </header>
  );
}

export default Header;
