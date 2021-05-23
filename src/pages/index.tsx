import { Flex, Text } from "@chakra-ui/react";

export default function Home (): JSX.Element {
  return (
    <Flex>
      <Text>Hello World!</Text>
      {
        true && (
          <Flex>
            <Text>Oi</Text>
          </Flex>
        )
      }
    </Flex>
  );
}
