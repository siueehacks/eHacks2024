import { Text, Box, Image, Flex } from "@chakra-ui/react";
import Nineteen04Labs from "../assets/sponsorLogos/1904labs.webp";
import ArchitectNow from "../assets/sponsorLogos/ArchitectNow.webp";
import NISC from "../assets/sponsorLogos/NISC.webp";
import ObjectComputing from "../assets/sponsorLogos/ObjectComputing.webp";
import SIUEGraduateSchool from "../assets/sponsorLogos/SIUEGraduateSchool.webp";
import Starburst from "../assets/sponsorLogos/Starburst.webp";
import T_Rex from "../assets/sponsorLogos/T-Rex.webp";

const Sponsors = () => {
  return (
    <Box
      mb="30vh"
      justifyContent="top"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text fontSize="6xl" fontFamily="monospace">
          Sponsors
        </Text>
        <Flex
          w="80%"
          gap="10vmin"
          justify="center"
          align="center"
          bg="rgba(255, 255, 255, 0.9)"
          p="10vmin"
          rounded="10vmin"
          direction="column"
        >
          <Text fontSize="4xl" fontFamily="monospace" color="black">
            Platinum Sponsors
          </Text>
          <a href="https://www.objectcomputing.com/" rel="external">
            <Image
              objectFit="scale-down"
              maxW="25vmax"
              maxH="40vmax"
              src={ObjectComputing}
              alt="Object Computing"
            />
          </a>
          <Text fontSize="4xl" fontFamily="monospace" color="black">
            Gold Sponsors
          </Text>
          <Flex gap="10vmin" wrap="wrap" justify="center" align="center">
            <a href="https://downtowntrex.org/" rel="external">
              <Image
                objectFit="scale-down"
                maxW="20vmax"
                maxH="15vmax"
                src={T_Rex}
                alt="T-Rex"
              />
            </a>
          </Flex>
          <Text fontSize="4xl" fontFamily="monospace" color="black">
            Silver Sponsors
          </Text>
          <Flex wrap="wrap" justify="space-around" align="center">
            <a href="https://www.nisc.coop/" rel="external">
              <Image
                objectFit="contain"
                w="20vmax"
                h="15vmax"
                src={NISC}
                alt="NISC"
              />
            </a>
            <a href="https://www.starburst.io/" rel="external">
              <Image
                objectFit="contain"
                w="20vmax"
                h="15vmax"
                src={Starburst}
                alt="Starburst"
              />
            </a>
            <a href="https://www.architectnow.net/" rel="external">
              <Image
                objectFit="contain"
                w="20vmax"
                h="15vmax"
                src={ArchitectNow}
                alt="ArchitectNow"
              />
            </a>
            <a href="https://1904labs.com/" rel="external">
              <Image
                objectFit="contain"
                w="20vmax"
                h="15vmax"
                src={Nineteen04Labs}
                alt="1904 Labs"
              />
            </a>
            <a href="https://www.siue.edu/graduate/" rel="external">
              <Image
                objectFit="contain"
                w="20vmax"
                h="15vmax"
                src={SIUEGraduateSchool}
                alt="SIUE Graduate School"
              />
            </a>
          </Flex>
        </Flex>
        <Text fontSize="xl" fontFamily="monospace">Net event proceeds will go to benefit the SIUE Computer Science Development Fund</Text>
      </Box>
    </Box>
  );
};

export default Sponsors;
