import {Box, Button, Flex, FormLabel, Heading, Text} from "@chakra-ui/react";
import NumberControl from "../../../components/NumberControl";
import {useState} from "react";
import {orgsState} from "../../../globalState/orgs";


export default function FilteredGetOrgsForm() {
    const [minAnnualTurnover, setMinAnnualTurnover] = useState();
    const [maxAnnualTurnover, setMaxAnnualTurnover] = useState();
    const [minEmployeeCount, setMinEmployeeCount] = useState();
    const [maxEmployeeCount, setMaxEmployeeCount] = useState();

    const getFilteredByAnalSubmitHandler = e => {
        e.preventDefault();
        orgsState.getFilteredOrgsByAnal(minAnnualTurnover, maxAnnualTurnover);
    };

    const getFilteredByEmployeesSubmitHandler = e => {
        e.preventDefault();
        orgsState.getFilteredOrgsByEmployees(minEmployeeCount, maxEmployeeCount);
    };

    return (
        <Box mx={5} py={5} px={5} borderWidth={1} borderRadius={14} boxShadow="lg"
             h="100%" w="full" minW={300}>
            <Heading align="center" as="h4" size="md" letterSpacing={"tighter"} mx={10} mb={5}>
                <Text>Получить организации по фильтрам</Text>
            </Heading>
            <form>
                <FormLabel>Отфильтровать организации по годовому обороту</FormLabel>
                <NumberControl label={"Min anal turnover:"} min={0} value={minAnnualTurnover}
                               setValue={setMinAnnualTurnover}/>
                <NumberControl label={"Max anal turnover:"} min={0} value={maxAnnualTurnover}
                               setValue={setMaxAnnualTurnover}/>
                <Flex my={5} justifyContent="center">
                    <Button colorScheme='blue' onClick={getFilteredByAnalSubmitHandler}>Выполнить</Button>
                </Flex>
            </form>
            <form>
                <FormLabel>Отфильтровать организации по количеству сотрудников</FormLabel>
                <NumberControl label={"Min employees count:"} min={0} value={minEmployeeCount}
                               setValue={setMinEmployeeCount}/>
                <NumberControl label={"Max employees count:"} min={0} value={maxEmployeeCount}
                               setValue={setMaxEmployeeCount}/>
                <Flex mt={5} justifyContent="center">
                    <Button colorScheme='blue' onClick={getFilteredByEmployeesSubmitHandler}>Выполнить</Button>
                </Flex>
            </form>
        </Box>
    );
}