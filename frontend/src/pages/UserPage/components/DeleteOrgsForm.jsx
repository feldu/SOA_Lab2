import {Box, Button, Flex, Heading, Text} from "@chakra-ui/react";
import NumberControl from "../../../components/NumberControl";


export default function DeleteOrgsForm() {

    return (
        <Box mx={5} py={5} px={5} borderWidth={1} borderRadius={14} boxShadow="lg"
             h="100%" w="full" minW={300}>
            <form>
                <Heading align="center" as="h4" size="md" letterSpacing={"tighter"} mx={10} mb={5}>
                    <Text>Удалить организации</Text>
                </Heading>
                <NumberControl label={"Id:"} min={1} placeholder={"Not required for add"}/>
                <NumberControl label={"Annual Turnover:"} min={0}/>
                <Flex mt={5} justifyContent="space-between">
                    <Button mx={5} colorScheme='red'>Удалить (id)</Button>
                    <Button mx={5} colorScheme='red'>Удалить (anal)</Button>
                </Flex>
            </form>
        </Box>
    );
}