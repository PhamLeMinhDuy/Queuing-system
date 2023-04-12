import React from 'react'
import { useTable } from 'react-table';
import './TableDeviceList.css'
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
    <table style={{width: "100%",
      height: "490px"}}{...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className='th-table-devicelist' {...column.getHeaderProps()}>{column.render('Header')}</th>
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
                <td style={{height:"49px"}}{...cell.getCellProps()} 
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
