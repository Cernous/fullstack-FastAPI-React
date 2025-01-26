import { Box, Divider, Flex, ColorMode, Center, Link} from '@chakra-ui/react'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

import React from 'react'

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <Breadcrumb display="flex" justifyContent="center" alignItems="center" h="17vh">
      <BreadcrumbItem >
        <BreadcrumbLink href="/about"
         _hover={{
          color: "orange", // Increase font size on hover
          textDecoration: "none", // Optionally remove underline
        }}>About Us</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
<Flex
        display="flow"
        flexDir="column"
        justifyContent="space-between"
        width = "50%"
        transform = "translate(50%, -70%)" 
        p={4}
      > 
      <Box>
      <Center>
          <Link
            href="/"
            color="black"
            fontSize="2rem"
            fontWeight="bold"
            _hover={{
              color: "red",
              textDecoration: "none", // Optionally remove underline
            }}
            transition="all 0.3s ease-in-out"
          > 
            Tomat.io
          </Link>
        </Center></Box>
      </Flex>
    <Outlet />
    </>
  )
}
