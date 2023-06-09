import React, { useState, useEffect } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from '@chakra-ui/react';
import Logos from '../../assets/gaming-g.png';
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
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);
  const isLoggedIn = Auth.loggedIn();

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log('we are being triggered :D');
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('transitionend', handler);
  }, []);

  function handleInstallation(evt) {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();

    if (!supportsPWA) {
      return;
    }
  }

  return (
    <header style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Flex direction="column" align="center">
        <img
          className="img"
          src={Logos}
          alt="project"
          width="200"
          height="200"
        ></img>

        <Tabs
          className="white-tabs"
          align="center"
          variant="soft-rounded"
          colorScheme="cyan"
          style={{ width: "100%" }}
        >
          <TabList className="white-tabs">
            <Tab key="1">Home</Tab>

            {isLoggedIn && <Tab key="2">Profile</Tab>}
            {isLoggedIn && <Tab key="3">Games</Tab>}
            {isLoggedIn && <Tab key="4">Chat</Tab>}
            {isLoggedIn && <Tab key="5">Gamers</Tab>}
            {isLoggedIn && <Tab key="6">Logout</Tab>}
            {!isLoggedIn && <Tab key="7">Login</Tab>}
            {!isLoggedIn && <Tab key="8">Signup</Tab>}

            <Tab key="9" onClick={handleInstallation}>
              Install
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel key="1">
              <Home />
            </TabPanel>

            {isLoggedIn && (
              <TabPanel key="2">
                <Profile />
              </TabPanel>
            )}
            {isLoggedIn && (
              <TabPanel key="3">
                <Games />
              </TabPanel>
            )}
            {isLoggedIn && (
              <TabPanel key="4">
                <FormikGame />
              </TabPanel>
            )}
            {isLoggedIn && (
              <TabPanel key="5">
                <Gamers />
              </TabPanel>
            )}
            {isLoggedIn && (
              <TabPanel key="6">
                <Logout />
              </TabPanel>
            )}
            {!isLoggedIn && (
              <TabPanel key="7">
                <Login />
              </TabPanel>
            )}
            {!isLoggedIn && (
              <TabPanel key="8">
                <Signup />
              </TabPanel>
            )}
          </TabPanels>
        </Tabs>
      </Flex>

    </header>
  );
}

export default Header;