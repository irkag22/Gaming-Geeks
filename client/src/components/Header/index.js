import React from 'react';
import './style.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Header() {
    return (
        <div>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                    <Tab>Games</Tab>
                    <Tab>Players</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>games!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>players!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
}
export default Header;

