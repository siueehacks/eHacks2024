import { Text, Box, Image } from "@chakra-ui/react";
import eHacksLogo from "../../assets/eHacksLogo.png";

const ComingSoon = () => {
  return (
    <Box
      mt="15vh"
      justifyContent="top"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image
          src={eHacksLogo}
          alt="Presenting Sponsor"
          maxW="50vmax"
          maxH="50vh"
          mt="8vmin"
        />
      <Text fontSize="6xl" fontFamily="monospace">
          Coming Spring of 2024
      </Text>
      <Text fontSize="x1" fontFamily="monospace">
          Stay tuned :)
      </Text>
    </Box>
  );
};

export default ComingSoon;
