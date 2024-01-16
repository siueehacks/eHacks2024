import { Text, Box, Image, Flex } from "@chakra-ui/react";
import Nineteen04Labs from "../../assets/press/SheCode-Dennis.jpg";
import ArchitectNow from "../../assets/press/SheCode-Dennis.jpg";
import NISC from "../../assets/press/SheCode-Dennis.jpg";
import ObjectComputing from "../../assets/press/SheCode-Dennis.jpg";
import SIUEGraduateSchool from "../../assets/press/SheCode-Dennis.jpg";
import Starburst from "../../assets/press/SheCode-Dennis.jpg";
import T_Rex from "../../assets/press/SheCode-Dennis.jpg";

const Sponsor = (props) => {
  return (
    <a href={props.website} rel="external">
      <Image
        objectFit="scale-down"
        maxW="25vmax"
        maxH="40vmax"
        src={props.logo}
        alt={props.name}
      />
    </a>
  );
}

const SponsorTier = (props) => {
  return (
    <Flex
      w="100%"
      gap="2vmin"
      justify="center"
      align="center"
      bg={props.color}
      p="5vmin"
      rounded="5vmin"
      direction="column"
    >
      <Text fontSize="4xl" fontFamily="monospace" color="black">
        {props.tier} Sponsors
      </Text>
      <Flex
        direction="row"
        gap="2vmin"
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
        <SponsorTier tier="Most Awesome" color="gold">
          <Sponsor
            name="Object Computing"
            logo={ObjectComputing}
            website="https://google.com"
          />
          <Sponsor
            name="Object Computing"
            logo={ObjectComputing}
            website="https://google.com"
          />
        </SponsorTier>
        <SponsorTier tier="Awesome" color="silver">
          <Sponsor
            name="Object Computing"
            logo={ObjectComputing}
            website="https://google.com"
          />
        </SponsorTier>
        <Text fontSize="xl" fontFamily="monospace">Net event proceeds will go to benefit the SIUE Computer Science Development Fund</Text>
      </Box>
    </Box>
  );
};

export default Sponsors;