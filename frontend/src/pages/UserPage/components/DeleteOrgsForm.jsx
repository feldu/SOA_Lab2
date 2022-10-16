import {Box, Button, Flex, Heading, Text} from "@chakra-ui/react";
import NumberControl from "../../../components/NumberControl";
import {useState} from "react";
import {orgsState} from "../../../globalState/orgs";


export default function DeleteOrgsForm() {
    const [id, setId] = useState("");
    const [annualTurnover, setAnnualTurnover] = useState("");

    const deleteByIdSubmitHandler = e => {
        e.preventDefault();
        orgsState.deleteOrgById(id);
    };
    const deleteByAnalSubmitHandler = e => {
        e.preventDefault();
        orgsState.deleteOrgsByAnal({annualTurnover});
    };
    return (
        <Box mx={5} py={5} px={5} borderWidth={1} borderRadius={14} boxShadow="lg"
             h="100%" w="full" minW={300}>
            <form>
                <Heading align="center" as="h4" size="md" letterSpacing={"tighter"} mx={10} mb={5}>
                    <Text>Удалить организации</Text>
                </Heading>
                <NumberControl label={"Id:"} min={1} value={id} setValue={setId}/>
                <NumberControl label={"Annual Turnover:"} min={0} value={annualTurnover}
                               setValue={setAnnualTurnover}/>
                <Flex mt={5} justifyContent="space-between">
                    <Button mx={5} colorScheme='red' onClick={deleteByIdSubmitHandler}>Удалить (id)</Button>
                    <Button mx={5} colorScheme='red' onClick={deleteByAnalSubmitHandler}>Удалить (anal)</Button>
                </Flex>
            </form>
        </Box>
    );
}