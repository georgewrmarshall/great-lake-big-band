import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import {
  Container,
  Text,
  Link,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <Box
        as="section"
        height={["400px"]}
        display="flex"
        alignContent="center"
        justifyContent="center"
      >
        <Container
          maxW="container.sm"
          display="flex"
          alignContent="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Text
            as="h1"
            fontSize={["3xl", "5xl"]}
            fontWeight="bold"
            textAlign="center"
            mb={3}
          >
            Great Lake Big Band
          </Text>
          <Text
            as="p"
            fontSize={["md", "lg"]}
            fontWeight="bold"
            textAlign="center"
            mb={3}
          >
            15 member big band available for hire playing swing and jazz at
            weddings, concerts and other functions.
          </Text>
          <Text as="h1" fontSize={["md", "lg"]} textAlign="center">
            For bookings email{" "}
            <Link
              href="mailto:greatlakebigband@gmail.com"
              color="tomato"
              fontWeight="bold"
            >
              greatlakebigband@gmail.com
            </Link>
          </Text>
        </Container>
      </Box>
      <Box mt={4} mb={4}>
        <Container maxW="container.sm">
          <Text as="h2" fontSize={["2xl", "4xl"]} fontWeight="bold">
            About
          </Text>
          <Text as="p">
            Taupo’s Great Lake Big Band is a 15 member jazz and swing band with
            an extensive repertoire that includes swing and jazz standards as
            well as arrangements of more contemporary pieces. The group has over
            20 years’ experience playing at weddings, jazz clubs, conferences,
            concerts, balls and various other functions where the full sound of
            a big band is desired.
          </Text>
          <Text as="h4" fontSize={["lg", "2xl"]} fontWeight="bold">
            Line-Up
          </Text>
          <Text>Typically:</Text>
          <UnorderedList>
            <ListItem>4 trumpets</ListItem>
            <ListItem> 2 trombones</ListItem>
            <ListItem> 4 saxes</ListItem>
            <ListItem> rhythm section (bass, guitar, drums, keyboard)</ListItem>
            <ListItem> vocals (female)</ListItem>
          </UnorderedList>

          <Text as="h4" fontSize={["lg", "2xl"]} fontWeight="bold">
            Arrangers/Composers
          </Text>
          <Text as="p">
            Benny Goodman, Glenn Miller, Gordon Goodwin, Tom Kubis, Dave Wolpe,
            Sammy Nestico, Paul Jennings, Barry Clewett, Jerry Nowak…
          </Text>

          <Text as="h4" fontSize={["lg", "2xl"]} fontWeight="bold">
            Songs like:
          </Text>
          <Text as="p">
            Mack the Knife, Boogie Woogie Bugle Boy, Hit the Road Jack, Take the
            A Train, It Don’t Mean a Thing, Straighten Up and Fly Right, Ain’t
            Misbehavin’, In the Mood, American Patrol, Chattanooga Choo Choo,
            Ol’ Devil Called Love, Misty, Bad Habits, Count Bubba, No Moon at
            All, I’ve Got You Under My Skin, Bernie’s Tune… (over 150
            arrangements to choose from) …{" "}
          </Text>
        </Container>
      </Box>
      <Box mt={4} mb={4}>
        <Container maxW="container.sm">
          <Text as="h2" fontSize={["2xl", "4xl"]} fontWeight="bold">
            Contact
          </Text>
          <Text as="p">Contact Matt West</Text>
          <Text as="p">
            To discuss whether the Great Lake Big Band will suit your event.
          </Text>
          <Text as="p">Tel: 027 222 6242</Text>
          <Text as="p">Email: greatlakebigband@gmail.com</Text>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default IndexPage;
