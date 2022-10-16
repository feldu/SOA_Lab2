import {Flex} from "@chakra-ui/react";
import MainHeader from "../../components/MainHeader";
import GetOrgsForm from "./components/GetOrgsForm";
import AddUpdOrgsForm from "./components/AddUpdOrgsForm";

export default function UserPage() {
    return (
        <Flex direction="column">
            <MainHeader/>
            <Flex direction="column" w="full" justifyContent="center" alignItems="center" flex={1}
                  p={5} mx="auto">
                <Flex direction="row" w="100%" alignItems="stretch" mt={5}>
                    <GetOrgsForm/>
                    <AddUpdOrgsForm/>
                </Flex>
                <Flex direction="row" w="100%" alignItems="stretch" mt={5}>
                    <GetOrgsForm/>
                    <GetOrgsForm/>
                    <GetOrgsForm/>
                </Flex>
            </Flex>
        </Flex>
    );
}