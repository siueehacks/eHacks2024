import Waves from "../components/Waves";
import {
    Button,
    Flex,
    Text,
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
        } from "@chakra-ui/react";
import {CheckIcon, CloseIcon} from "@chakra-ui/icons"
import { Link } from "react-router-dom";
import "./Home.css";

const BeSponsor = () => {
    return (
        <div className="Page">
            <Waves />
            <div className="ContentBox">
            <Flex direction="row" align="center" justify="space-between">
            <Flex align="center" justify="left" w="10%">
                <Link to="/">
                    <Button variant="outline" _hover={{ bg: '#969696' }}>Return to Homepage</Button>
                </Link>
            </Flex>
            <Box>
                <Text fontSize="6xl" fontFamily="monospace">Want to be a sponsor?</Text>
            </Box>
            <Box w="10%"></Box>
            </Flex>
            <TableContainer>
                <Table variant='unstyled'>
                    <Thead>
                        <Tr>
                            <Th>Perk</Th>
                            <Th>Platinum Tier ($3500)</Th>
                            <Th>Gold Tier ($2500)</Th>
                            <Th>Silver Tier ($1000)</Th>
                            <Th>Meal ($500/$250)</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Acknowledgements at Event</Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                        </Tr>
                        <Tr>
                            <Td>Logo on Shirts and Website</Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CloseIcon /></Td>
                        </Tr>
                        <Tr>
                            <Td>Career Fair Booth Space</Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CloseIcon /></Td>
                        </Tr>
                        <Tr>
                            <Td>Sponsor and Award Prize</Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CloseIcon /></Td>
                        </Tr>
                        <Tr>
                            <Td>Present a Tech Talk</Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CloseIcon /></Td>
                        </Tr>
                        <Tr>
                            <Td>Serve as Judging Panelist</Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CloseIcon /></Td>
                        </Tr>
                        <Tr>
                            <Td>Contribute to Swag Bags</Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CloseIcon /></Td>
                        </Tr>
                        <Tr>
                            <Td>Registrant Resumes</Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CloseIcon /></Td>
                            <Td><CloseIcon /></Td>
                        </Tr>
                        <Tr>
                            <Td>Sponsored Prize</Td>
                            <Td><CheckIcon /></Td>
                            <Td><CheckIcon /></Td>
                            <Td><CloseIcon /></Td>
                            <Td><CloseIcon /></Td>
                        </Tr>
                        <Tr>
                            <Td>Private Interview Space</Td>
                            <Td><CheckIcon /></Td>
                            <Td><CloseIcon /></Td>
                            <Td><CloseIcon /></Td>
                            <Td><CloseIcon /></Td>
                        </Tr>
                        <Tr>
                            <Td>"Presented by" Status</Td>
                            <Td><CheckIcon /></Td>
                            <Td><CloseIcon /></Td>
                            <Td><CloseIcon /></Td>
                            <Td><CloseIcon /></Td>
                        </Tr>
                        <Tr>
                            <Td>Special Recognition on <br/>shirts, website, and at event</Td>
                            <Td><CheckIcon /></Td>
                            <Td><CloseIcon /></Td>
                            <Td><CloseIcon /></Td>
                            <Td><CloseIcon /></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <Text fontSize="2xl" fontFamily="monospace">
                If you have any questions or would like to sponsor, contact us at <a href="mailto:siue.ehack@gmail.com">siue.ehacks@gmail.com</a>
            </Text>
        </div>
    </div>
    );
}

export default BeSponsor;