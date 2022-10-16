import {Box, Button, Flex, FormLabel, Heading, Text} from "@chakra-ui/react";
import TextControl from "../../../components/TextControl";


export default function AdditionalGetOrgsForm() {
    return (

        <Box mx={5} py={5} px={5} borderWidth={1} borderRadius={14} boxShadow="lg"
             h="100%" w="full" minW={300}>
            <Heading align="center" as="h4" size="md" letterSpacing={"tighter"} mx={10} mb={5}>
                <Text>Получить дополнительную информацию</Text>
            </Heading>
            <form>
                <FormLabel>Сгруппировать объекты по значению поля officialAddress, вернуть количество элементов в каждой
                    группе</FormLabel>
                <Flex my={5} justifyContent="center">
                    <Button colorScheme='blue'>Выполнить</Button>
                </Flex>
            </form>
            <form>
                <FormLabel>Вернуть массив объектов, значение поля type которых больше заданного</FormLabel>
                <TextControl label={"Type: "} placeholder={"PUBLIC, GOVERNMENT, TRUST"}/>
                <Flex mt={5} justifyContent="center">
                    <Button colorScheme='blue'>Выполнить</Button>
                </Flex>
            </form>
        </Box>
    );
}