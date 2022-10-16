import {Box, Heading, Table, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {useTable} from "react-table";
import {useMemo} from "react";

export default function ResultTable() {
    const columns = useMemo(() => [
        {Header: 'id', accessor: 'id'},
        {Header: 'Name', accessor: 'name'},
        {Header: 'Employees count', accessor: 'employeesCount'},
        {
            Header: 'Coordinates', columns: [
                {Header: 'X', accessor: 'coordinatesX'},
                {Header: 'Y', accessor: 'coordinatesY'},
            ]
        },
        {Header: 'Creation Date', accessor: 'creationDate'},
        {Header: 'Annual turnover', accessor: 'annualTurnover'},
        {Header: 'Type', accessor: 'type'},
        {
            Header: 'Official address', columns: [
                {Header: 'Zip code', accessor: 'officialAddressZipCode'},
                {
                    Header: 'Town', columns: [
                        {Header: 'X', accessor: 'officialAddressTownX'},
                        {Header: 'Y', accessor: 'officialAddressTownY'},
                        {Header: 'Name', accessor: 'officialAddressTownName'},
                    ]
                },
            ]
        },

    ], []);

    const data = [];
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable(
        {
            columns,
            data
        },
    );
    return (
        <Box mx={5} py={5} px={5} borderWidth={1} borderRadius={14} boxShadow="lg"
             h="100%" w="full" minW={300}>
            <Heading align="center" as="h4" size="md" letterSpacing={"tighter"} mx={10} mb={5}>
                <Text>Результат запроса</Text>
                <Table {...getTableProps()}>
                    <Thead>
                        {headerGroups.map(headerGroup => (
                            <Tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <Tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                                    })}
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </Heading>
        </Box>
    );
}