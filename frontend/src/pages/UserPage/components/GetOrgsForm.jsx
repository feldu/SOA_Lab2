import {Box, Button, Flex, Heading, Text} from "@chakra-ui/react";
import {useState} from "react";
import NumberControl from "../../../components/NumberControl";
import SwitchControl from "../../../components/SwitchControl";
import TextControl from "../../../components/TextControl";
import {orgsState} from "../../../globalState/orgs";


export default function GetOrgsForm() {
    const [isPaginationEnable, setPaginationEnable] = useState(false);
    const [isFilteringEnable, setFilteringEnable] = useState(false);
    const [isSortingEnable, setSortingEnable] = useState(false);
    const [page, setPage] = useState();
    const [size, setSize] = useState();
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        orgsState.fetchOrgs({page, size, filter, sort});
    };

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
                    <NumberControl label={"Номер страницы:"} min={0} value={page} setValue={setPage}/>
                    <NumberControl label={"Размер страницы:"} min={0} value={size} setValue={setSize}/>
                </Box>
                <SwitchControl label={"Использовать фильтрацию?"} value={isFilteringEnable}
                               setValue={setFilteringEnable}/>
                <Box mb={4} display={isFilteringEnable ? "content" : "none"}>
                    <TextControl label={"Фильтрация:"} value={filter} setValue={setFilter}
                                 placeholder={"id>=2;officialAddress.zipCode==xxx;..."}/>
                </Box>
                <SwitchControl label={"Использовать сортировку?"} value={isSortingEnable}
                               setValue={setSortingEnable}/>
                <Box mb={4} display={isSortingEnable ? "content" : "none"}>
                    <TextControl label={"Сортировка:"} value={sort} setValue={setSort}
                                 placeholder={"id,desc;coordinates.y,asc;..."}/>
                </Box>
                <Flex mt={5} justifyContent="center">
                    <Button colorScheme='blue' onClick={submitHandler}>Получить</Button>
                </Flex>
            </form>
        </Box>
    );
}