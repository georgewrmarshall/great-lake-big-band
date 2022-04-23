import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { StaticImage } from "gatsby-plugin-image";
import {
  Container,
  Text,
  Link,
  Box,
  UnorderedList,
  ListItem,
  extendTheme,
  Stack,
  Center,
  Image,
} from "@chakra-ui/react";
import { Banner, Navbar } from "../components";

const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: "gray.900",
        _dark: "gray.50",
      },
    },
  },
});

// markup
const IndexPage = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <Banner>
        <Container
          maxW="container.sm"
          display="flex"
          alignContent="center"
          justifyContent="center"
          flexDirection="column"
          py={[10]}
        >
          <Text
            as="h1"
            fontSize={["3xl", "5xl"]}
            fontWeight="bold"
            textAlign="center"
            mb={3}
            color="white"
          >
            Great Lake Big Band
          </Text>
          <Text
            as="p"
            fontSize={["md", "lg"]}
            fontWeight="bold"
            textAlign="center"
            mb={3}
            color="white"
          >
            15 member big band available for hire playing swing and jazz at
            weddings, concerts and other functions.
          </Text>
          <Text
            as="h1"
            fontSize={["md", "lg"]}
            textAlign="center"
            color="white"
          >
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
      </Banner>
      <Box my={[4, 10]} id="about">
        <Container maxW="container.sm">
          <Text as="h2" fontSize={["2xl", "4xl"]} fontWeight="bold">
            About
          </Text>
          <Text as="p" mb={4}>
            Taupo’s Great Lake Big Band is a 15 member band with an extensive
            repertoire of swing and jazz standards as well as arrangements of
            more contemporary pieces. The group has over 20 years’ experience
            playing at weddings, jazz clubs, concerts, balls and other functions
            where the full sound of a big band is desired.
          </Text>
          <StaticImage
            layout="fullWidth"
            alt="GLBB Kiwanis gig band and dancers side on"
            src="../images/GLBB-Kiwanis-gig-band-and-dancers-side-on.jpeg"
            formats={["auto", "webp", "avif"]}
          />
          <Text as="p" mb={4} mt={4}>
            While swing numbers might be stock in trade for Taupo’s Great Lake
            Big Band, director Rowan Bolley also likes to test audiences, and
            his musicians, with some quirkier numbers. The group’s Christmas set
            includes Tom Kubis versions of some well-known carols and with a bit
            of notice the band can roll out multi-layered arrangements from Eric
            Richards, Don Menza or, if a headlong rush is called for, take a
            shot at something from the canon of Gordon Goodwin’s Big Phat Band.
            Most of the members tutor or teach music either at the local high
            schools, or with the Taupo School of Music – an organisation which
            provides primary students with a low-cost entry into learning an
            instrument.
          </Text>
          <StaticImage
            layout="fullWidth"
            alt="Great Lake Big Band"
            src="../images/IMG_4537.JPG"
            formats={["auto", "webp", "avif"]}
          />
          <Text as="p" mb={4} mt={4}>
            The GLBB has two sets of married couples and a pair of brothers, so
            if harmony breaks down at least carpooling means the group has a
            reduced carbon footprint. Expect a sampling of traditional jazz
            standards interspersed with some fresh arrangements – the source of
            which is best not discussed.
          </Text>
        </Container>
      </Box>
      <Box my={[4, 10]} id="line-up">
        <Container maxW="container.sm">
          <Text as="h2" fontSize={["2xl", "4xl"]} fontWeight="bold" mb={4}>
            Line-up
          </Text>
          <StaticImage
            layout="fullWidth"
            alt="GLBB whole band"
            src="../images/img-bg-2.png"
            formats={["auto", "webp", "avif"]}
          />
          <Text mt={4} mb={4} fontSize="lg" fontWeight="bold">
            Typically the line-up of the GLBB includes:
          </Text>
          <UnorderedList mb={4} display="grid" gridTemplateColumns="1fr 1fr">
            <ListItem fontSize="lg">🎺 4x trumpets</ListItem>
            <ListItem fontSize="lg">🎸 1x bass guitar</ListItem>
            <ListItem fontSize="lg">🎺 2x trombones</ListItem>
            <ListItem fontSize="lg">🎸 1x electric guitar</ListItem>
            <ListItem fontSize="lg">🎷 4x saxes</ListItem>
            <ListItem fontSize="lg">🥁 1x drums</ListItem>
            <ListItem fontSize="lg">🎹 1x keyboard</ListItem>
            <ListItem fontSize="lg">🎤 1x vocals (female)</ListItem>
          </UnorderedList>
        </Container>
      </Box>
      <Box my={[4, 10]} id="arrangers-composers">
        <Container maxW="container.sm">
          <Text as="h2" fontSize={["2xl", "4xl"]} fontWeight="bold">
            Arrangers/Composers
          </Text>
          <Text as="p" mb={4}>
            Benny Goodman, Glenn Miller, Gordon Goodwin, Tom Kubis, Dave Wolpe,
            Sammy Nestico, Paul Jennings, Barry Clewett, Jerry Nowak…
          </Text>

          <Text as="h4" fontSize={["lg", "2xl"]} fontWeight="bold">
            Songs like:
          </Text>
          <Text as="p" mb={4}>
            Mack the Knife, Boogie Woogie Bugle Boy, Hit the Road Jack, Take the
            A Train, It Don’t Mean a Thing, Straighten Up and Fly Right, Ain’t
            Misbehavin’, In the Mood, American Patrol, Chattanooga Choo Choo,
            Ol’ Devil Called Love, Misty, Bad Habits, Count Bubba, No Moon at
            All, I’ve Got You Under My Skin, Bernie’s Tune… (over 150
            arrangements to choose from) …{" "}
          </Text>
          <StaticImage
            layout="fullWidth"
            alt="GLBB whole band"
            src="../images/GLBB-whole-band1.JPG"
            formats={["auto", "webp", "avif"]}
          />
        </Container>
      </Box>
      <Box my={[4, 10]} id="contact">
        <Container maxW="container.sm">
          <Text as="h2" fontSize={["2xl", "4xl"]} fontWeight="bold">
            Contact
          </Text>
          <Text as="p" mb={4}>
            Contact Matt West to discuss whether the Great Lake Big Band will
            suit your event.
          </Text>
          <Text as="p">
            <strong>Tel:</strong> 027 222 6242
          </Text>
          <Text as="p">
            <strong>Email:</strong> greatlakebigband@gmail.com
          </Text>
        </Container>
      </Box>
      <Box my={[4, 10]} id="contact">
        <Container maxW="container.sm">
          <Text as="h2" fontSize={["2xl", "4xl"]} fontWeight="bold" mb={4}>
            Affiliates
          </Text>
          <Link
            href="https://www.facebook.com/TaupoConcertBand/"
            target="_blank"
            display="inline-flex"
          >
            <Box
              maxW={"300px"}
              w={"full"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
              border="1px solid #ccc"
            >
              <Box
                h={"210px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
                overflow="hidden"
                display="flex"
                alignItems="center"
              >
                <StaticImage
                  alt="Taupo Concert Band"
                  src="../images/taupo-concert-band-logo.png"
                  layout="constrained"
                />
              </Box>
              <Stack>
                <Text as="p">Taupo Concert Band</Text>
              </Stack>
            </Box>
          </Link>
        </Container>
      </Box>
      <Box py={[10]} borderTop="1px solid #ccc">
        <Container maxW="container.sm">
          <Box display="flex" justifyContent="center">
            <div>
              <StaticImage
                alt="Logo"
                src="../images/Shirt-Logo.jpg"
                formats={["auto", "webp", "avif"]}
                width="160px"
              />
            </div>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default IndexPage;
