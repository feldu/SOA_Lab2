import {Box, Button, Flex, Heading, Text} from "@chakra-ui/react";
import {useState} from "react";
import NumberControl from "../../../components/NumberControl";
import SwitchControl from "../../../components/SwitchControl";
import TextControl from "../../../components/TextControl";


export default function GetOrgsForm() {
    const [isPaginationEnable, setPaginationEnable] = useState(false);
    const [isFilteringEnable, setFilteringEnable] = useState(false);
    const [isSortingEnable, setSortingEnable] = useState(false);
    return (

        <Box mx={5} py={5} px={5} borderWidth={1} borderRadius={14} boxShadow="lg"
             h="100%" w="full" minW={300}>
            <form>
                <Heading align="center" as="h4" size="md" letterSpacing={"tighter"} mx={10} mb={5}>
                    <Text>Получить организации</Text>
                </Heading>
                <SwitchControl label={"Использовать пагинацию?"} value={isPaginationEnable}
                               setValue={setPaginationEnable}/>
                <Box mb={4} display={isPaginationEnable ? "content" : "none"}>
                    <NumberControl label={"Номер страницы:"} min={0}/>
                    <NumberControl label={"Размер страницы:"} min={0}/>
                </Box>
                <SwitchControl label={"Использовать фильтрацию?"} value={isFilteringEnable}
                               setValue={setFilteringEnable}/>
                <Box mb={4} display={isFilteringEnable ? "content" : "none"}>
                    <TextControl label={"Фильтрация:"} placeholder={"id>=2;officialAddress.zipCode==xxx;..."}/>
                </Box>
                <SwitchControl label={"Использовать сортировку?"} value={isSortingEnable}
                               setValue={setSortingEnable}/>
                <Box mb={4} display={isSortingEnable ? "content" : "none"}>
                    <TextControl label={"Сортировка:"} placeholder={"id,desc;coordinates.y,asc;..."}/>
                </Box>
                <Flex mt={5} justifyContent="center">
                    <Button colorScheme='blue'>Получить</Button>
                </Flex>
            </form>
        </Box>
    );
}