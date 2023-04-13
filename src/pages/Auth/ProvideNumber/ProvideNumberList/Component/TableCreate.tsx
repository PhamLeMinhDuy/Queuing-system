import React from 'react'
import { useTable } from 'react-table';
import './Table.css'
export const TableCreate = ({columns, data}: any) => {
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
              <th className='th-providenumber-table' {...column.getHeaderProps()}>{column.render('Header')}</th>
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
                      cell.column.id === "state"
                      ? cell.value === "Đang chờ"
                        ? "dot-blue"
                        : cell.column.id === "state"
                          ? cell.value === "Bỏ qua"
                            ? "dot-red"
                            : "dot-purple"
                            : ""
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
