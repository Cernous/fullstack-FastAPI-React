import { Box, Input, Link, Center, Flex, InputGroup, InputRightElement, Button, ChakraProvider, keyframes} from '@chakra-ui/react'
import React, { useState } from "react";
import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_layout/')({
  component: Index,
})

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 15vh); /* Start slightly below the initial position */
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0vh); /* Final position */
  }
`;

const fadeUp2 = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 15vh); /* Start slightly below the initial position */
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -10vh); /* Final position */
  }
`;


function Index() {
  return (
    
    <div>
      

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="fixed"
              left="35%"
              transform="translate(-50%, -10vh)"
              width="60%" // Adjust width as needed
              height="0%" // Adjust height as needed
              fontWeight={1000}
              color="green"
              textAlign="center"
              fontSize="5rem"
              animation={`${fadeUp2} 1.5s ease-out`} // Apply the animation
            >
              Don't Be A Tomato.
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="fixed"
              left="70%"
              transform="translate(-50%, 0vh)"
              width="60%" // Adjust width as needed
              height="0%" // Adjust height as needed
              fontWeight={1000}
              color="green"
              textAlign="center"
              fontSize="5rem"
              animation={`${fadeUp} 2s ease-in`} // Apply the animation
            >
               Eat A Tomat.io
            </Box>
                
                
        <Box position="fixed" 
         bottom="23vh" 
         width="38%" 
         p={4}
         left="50%" 
         transform="translateX(-50%)" 
         borderRadius={50}
         borderColor={'red'}
         borderWidth={"2px"}
         borderStyle={'inset'}
         transition="all 0.3s ease-in-out"
         color = "darkgreen"
         textAlign={"center"}
         fontWeight={500}
         fontSize={18}
         lineHeight={"2.5rem"}>
            Meet Tomat.io, your personal meal prep buddy. 
            Say goodbye to boring meal routines! Tomat.io serves up meal suggestions, 
            recipes, and even video guides tailored to your cravings.
         </Box>

      <Box position="fixed" 
         bottom="4vh" 
         width="30%" 
         bg="white" p={4}
         left="50%" 
         transform="translateX(-50%)" 
         boxShadow="2xl" 
         borderRadius={50}
         transition="all 0.3s ease-in-out"
         _focusWithin={{
           transform: "translateX(-50%) translateY(-20vh)",
           width: "75%",
           boxShadow: "lg",
         }}>
  
  <div style={{ position: "relative", width: "100%" }}>
  <Input
    type="text"
    name="query"
    placeholder="Enter Your Questions Here"
    borderColor="green"
    focusBorderColor="green"
    borderRadius={50}
    _focusWithin={{
      borderColor: "lime",
      borderWidth: "2px",
    }}
    style={{
      paddingRight: "60px", // Add padding to ensure text doesn't overlap the button
    }}
  />
  
</div>
    </Box>
    </div>
    
  )
}
