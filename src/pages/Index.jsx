import { useState } from "react";
import { Container, Box, VStack, HStack, Text, Button, IconButton, Input, Textarea, Image, Flex, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { sender: "user", text: inputValue }]);
      setInputValue("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: "This is a bot response." }]);
      }, 1000);
    }
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Box bg="teal.500" p={4} color="white" textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">
            DEBERE BIRHAN UNIVERSITY INFORMATION
          </Text>
        </Box>

        <HStack spacing={4} align="start">
          <VStack spacing={4} flex="1">
            <Image src="https://images.unsplash.com/photo-1591710110747-dfeae9fa762a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwMXxlbnwwfHx8fDE3MTU5NjczMTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University 1" />
            <Image src="https://images.unsplash.com/photo-1591710110747-dfeae9fa762a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwMnxlbnwwfHx8fDE3MTU5NjczMTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University 2" />
            <Image src="https://images.unsplash.com/photo-1591710110747-dfeae9fa762a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwM3xlbnwwfHx8fDE3MTU5NjczMTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University 3" />
            <Image src="https://images.unsplash.com/photo-1591710110747-dfeae9fa762a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwNHxlbnwwfHx8fDE3MTU5NjczMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University 4" />
            <Image src="https://images.unsplash.com/photo-1543193158-07c01963e800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwNXxlbnwwfHx8fDE3MTU5NjczMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University 5" />
            <Image src="https://images.unsplash.com/photo-1696435333073-3e2dc89e906b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwNnxlbnwwfHx8fDE3MTU5NjczMjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University 6" />
            <Image src="https://images.unsplash.com/photo-1591710110747-dfeae9fa762a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwN3xlbnwwfHx8fDE3MTU5NjczMjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University 7" />
          </VStack>

          {isChatOpen && (
            <Box flex="1" borderWidth="1px" borderRadius="lg" p={4}>
              <VStack spacing={4} align="stretch">
                <Box flex="1" overflowY="auto" maxH="400px" borderWidth="1px" borderRadius="lg" p={2}>
                  {messages.map((msg, index) => (
                    <Box key={index} alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"} bg={msg.sender === "user" ? "teal.100" : "gray.100"} borderRadius="md" p={2} mb={2}>
                      <Text>{msg.text}</Text>
                    </Box>
                  ))}
                </Box>
                <HStack>
                  <Textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type your message..." />
                  <Button onClick={handleSendMessage} colorScheme="teal">
                    Send
                  </Button>
                </HStack>
              </VStack>
            </Box>
          )}
        </HStack>

        <Flex justify="space-between" align="center" p={4} bg="gray.100" borderRadius="md">
          <Button colorScheme="teal" onClick={() => setIsChatOpen(!isChatOpen)}>
            {isChatOpen ? "Close AMaK" : "Open AMaK"}
          </Button>
          <Spacer />
          <HStack spacing={4}>
            <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
            <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} />
          </HStack>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
