import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Create a motion-enabled version of ModalContent
const MotionModalContent = motion(ModalContent);

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Framer Motion animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton display={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}

      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <MotionModalContent
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          h={{ base: "auto", md: "410px" }}
          bgGradient="linear(to-r, #F5F5DC, rgb(117, 69, 34))"
          color="white"
          borderRadius="lg"
          overflow="hidden"
        >
          <ModalHeader
            fontSize={{ base: "2xl", md: "4xl" }}
            fontFamily="Work sans"
            display="flex"
            justifyContent="center"
            bg="rgba(0, 0, 0, 0.2)"
            borderBottom="2px solid rgba(255,255,255,0.3)"
            py={{ base: 2, md: 4 }}
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton color="white" _hover={{ bg: "rgba(255,255,255,0.2)" }} />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py={{ base: 4, md: 6 }}
          >
            <Image
              borderRadius="full"
              boxSize={{ base: "100px", md: "150px" }}
              src={user.pic}
              alt={user.name}
              mb={4}
              border="3px solid white"
              objectFit="cover"
            />
            <Text fontSize={{ base: "lg", md: "xl" }} fontFamily="Work sans">
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter justifyContent="center" py={{ base: 2, md: 4 }}>
            <Button
              onClick={onClose}
              bg="white"
              color="black"
              _hover={{ bg: "gray.300" }}
              fontWeight="bold"
              px={{ base: 4, md: 8 }}
              py={{ base: 2, md: 3 }}
            >
              Close
            </Button>
          </ModalFooter>
        </MotionModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
