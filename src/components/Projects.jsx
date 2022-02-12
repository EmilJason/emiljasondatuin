import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';

export default function Projects() {
  return (
      <HStack justifyContent={"center"} alignItems={"center"} spacing={"2rem"}>
          <Box borderRadius={"lg"} borderColor={'gray.600'} borderWidth={"1px"} w={"15vw"} padding={"2rem"}>
            <Box>
                <Text>Inventory</Text>
            </Box>
          </Box>
          <Box borderRadius={"lg"} borderColor={'gray.600'} borderWidth={"1px"} w={"15vw"} padding={"2rem"}>
            <Box>
                <Text>Inventory</Text>
            </Box>
          </Box>
      </HStack>
  );
}
