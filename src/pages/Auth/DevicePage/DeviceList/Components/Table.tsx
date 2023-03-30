import React from 'react'
import { useTable } from 'react-table';
import './Table.css'
export const Table = ({columns, data}: any) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
      })
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} 
                    className={
                    cell.column.id === "activeState"
                      ? cell.value === "Hoạt động"
                        ? "dot-green"
                        : "dot-red"
                      : cell.column.id === "connectState"
                      ? cell.value === "Kết nối"
                        ? "dot-green"
                        : "dot-red"
                      : ""
                  }>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}
