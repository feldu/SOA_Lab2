import {Box, Button, Flex, Heading, Text} from "@chakra-ui/react";
import NumberControl from "../../../components/NumberControl";
import TextControl from "../../../components/TextControl";


export default function AddUpdOrgsForm() {

    return (

        <Box mx={5} py={5} px={5} borderWidth={1} borderRadius={14} boxShadow="lg"
             h="100%" w="full" minW={500}>
            <form>
                <Heading align="center" as="h4" size="md" letterSpacing={"tighter"} mx={10} mb={5}>
                    <Text>Добавить/Обновить организацию</Text>
                </Heading>
                <Flex w="full" justifyContent="space-around">
                    <Box mx={3}>
                        <NumberControl label={"Id:"} min={1} placeholder={"Not required for add"}/>
                        <TextControl label={"Name:"}/>
                        <NumberControl label={"Employees count:"} min={0}/>
                        <NumberControl label={"Coordinate X:"}/>
                        <NumberControl label={"Coordinate Y:"}/>
                        <TextControl label={"Creation date:"} placeholder={"Not required for add"}/>
                    </Box>
                    <Box mx={3}>
                        <NumberControl label={"Annual Turnover:"} min={0}/>
                        <TextControl label={"Type:"} placeholder={"PUBLIC, GOVERNMENT, TRUST"}/>
                        <TextControl label={"Official address zip code:"}/>
                        <NumberControl label={"Official address town X:"}/>
                        <NumberControl label={"Official address town Y:"}/>
                        <TextControl label={"Official address town name:"}/>
                    </Box>
                </Flex>
                <Flex mt={5} mx={8} justifyContent="space-between">
                    <Button colorScheme='green'>Добавить</Button>
                    <Button colorScheme='yellow'>Обновить</Button>
                </Flex>
            </form>
        </Box>
    );
}