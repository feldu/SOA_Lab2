import {Box, Button, Flex, FormLabel, Heading, Text} from "@chakra-ui/react";
import NumberControl from "../../../components/NumberControl";


export default function FilteredGetOrgsForm() {
    return (

        <Box mx={5} py={5} px={5} borderWidth={1} borderRadius={14} boxShadow="lg"
             h="100%" w="full" minW={300}>
            <Heading align="center" as="h4" size="md" letterSpacing={"tighter"} mx={10} mb={5}>
                <Text>Получить организации по фильтрам</Text>
            </Heading>
            <form>
                <FormLabel>Отфильтровать организации по годовому обороту</FormLabel>
                <NumberControl label={"Min anal turnover:"} min={0}/>
                <NumberControl label={"Max anal turnover:"} min={0}/>
                <Flex my={5} justifyContent="center">
                    <Button colorScheme='blue'>Выполнить</Button>
                </Flex>
            </form>
            <form>
                <FormLabel>Отфильтровать организации по количеству сотрудников</FormLabel>
                <NumberControl label={"Min employees count:"} min={0}/>
                <NumberControl label={"Max employees count:"} min={0}/>
                <Flex mt={5} justifyContent="center">
                    <Button colorScheme='blue'>Выполнить</Button>
                </Flex>
            </form>
        </Box>
    );
}