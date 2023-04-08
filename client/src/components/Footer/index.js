import React from 'react';
import './style.css';

// function Footer() {
//     return (
//         <footer>
//             <p>Created by: Cynthia, Huda, Irina, and Josh</p>
//         </footer>
//     );
// }
import { Box } from "@chakra-ui/react";

function Footer() {
  return (
    <Box>
      <Box as="footer" p="4" mt="8" textAlign="center">
      ◽ Created by GG Team: Cynthia, Huda, Irina, and Josh ◽
      </Box>
    </Box>
  );
}

export default Footer;

