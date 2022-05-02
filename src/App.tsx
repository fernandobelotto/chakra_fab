import { AddIcon, DeleteIcon, EmailIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Fade,
  IconButton,
  SlideFade,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

export function App() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w="100vw" h="100vh">
      <Center>
        <VStack>
          <SlideFade in={isOpen} offsetY="80px">
            <IconButton aria-label="add" icon={<StarIcon />} />
          </SlideFade>
          <SlideFade in={isOpen} offsetY="40px">
            <IconButton aria-label="add" icon={<EmailIcon />} />
          </SlideFade>
          <SlideFade in={isOpen} offsetY="20px">
            <IconButton aria-label="add" icon={<DeleteIcon />} />
          </SlideFade>
          <IconButton onClick={onToggle} aria-label="add" icon={<AddIcon />} />
        </VStack>
      </Center>
    </Box>
  );
}
