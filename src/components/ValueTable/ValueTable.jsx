import React from "react";
import { useTable } from "react-table";
import '../ValueTable/ValueTable.css';
function ValueTable({ data }) {
    const columns = React.useMemo(
        () => [
            {
                Header: "Company",
                accessor: "company",
            },
            {
                Header: "Ticker",
                accessor: "ticker",
            },
            {
                Header: "Stock Price",
                accessor: "stockPrice",
            },
            {
                Header: "Change",
                accessor: "change",
            },
            {
                Header: "Change%",
                accessor: "changeP",
            }
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
export default ValueTable;
