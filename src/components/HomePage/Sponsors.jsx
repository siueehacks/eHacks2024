import { Text, Box, Image, Flex} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import Nineteen04Labs from "../../assets/press/SheCode-Dennis.jpg";
import ArchitectNow from "../../assets/press/SheCode-Dennis.jpg";
import NISC from "../../assets/press/SheCode-Dennis.jpg";
import ObjectComputing from "../../assets/press/SheCode-Dennis.jpg";
import SIUEGraduateSchool from "../../assets/SIUEGraduateSchool.webp";
import Starburst from "../../assets/press/SheCode-Dennis.jpg";
import T_Rex from "../../assets/T-Rex.webp";

const tierColor = {
  platinum: "209, 218, 246",
  gold: "218, 165, 32",
  silver: "211, 211, 211",

};

const Sponsor = (props) => {
  return (
    <a href={props.website} rel="external">
      <Image
        objectFit="scale-down"
        maxW="15vmax"
        maxH="30vmax"
        src={props.logo}
        alt={props.name}
      />
    </a>
  );
}

const SponsorTier = (props) => {
  return (
    <Flex
      w="80%"
      gap="2vmin"
      justify="center"
      align="center"
      bg={"rgb(" + props.color + ", 0.5)"}
      p="5vmin"
      rounded="5vmin"
      direction="column"
    >
      <Text fontSize={{base: "2xl", md: "4xl"}} fontFamily="monospace" color="black" opacity="100%">
        {props.name} Sponsors
      </Text>
      <Flex
        direction="row"
        gap="2vmin"
        wrap="wrap"
        justify="center"
        opacity="100%"
      >
        {props.children}
      </Flex>
    </Flex>
  );
}

const Sponsors = () => {
  return (
    <Box
      mb="30vh"
      justifyContent="top"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center" gap="2vmin">
        <Text fontSize="6xl" fontFamily="monospace">
          Sponsors
        </Text>
        {/* <SponsorTier name="Platinum" color={tierColor.platinum}>
          <Sponsor
            name="Object Computing"
            logo={ObjectComputing}
            website="https://google.com"
          />
        </SponsorTier> */}
        <SponsorTier name="Gold" color={tierColor.gold}>
          <Sponsor
            name="T-Rex"
            logo={T_Rex}
            website="https://downtowntrex.org/"
          />
        </SponsorTier>
        <SponsorTier name="Silver" color={tierColor.silver}>
          <Sponsor
            name="SIUE Graduate School"
            logo={SIUEGraduateSchool}
            website="https://www.siue.edu/graduate/"
          />
        </SponsorTier>
        <Text fontSize="xl" fontFamily="monospace">Net event proceeds will go to benefit the SIUE Computer Science Development Fund</Text>
        <Text fontSize="4xl" fontFamily="monospace">Want to sponsor eHacks? Check out our <ChakraLink as={ReactRouterLink} to="/be-a-sponsor" textDecoration={"underline"}>Be a Sponsor page</ChakraLink>!</Text>
      </Box>
    </Box>
  );
};

export default Sponsors;