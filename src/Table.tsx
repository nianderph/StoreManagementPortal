import React, { Component } from 'react'
import reportWebVitals from './reportWebVitals'
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>StoreId</th>
        <th>SKU</th>
        <th>ProductName</th>
        <th>Price</th>
        <th>Date</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.characterData.map((row,index) => {
    return (
      <tr key = {index}>
        <td>{row.StoreId}</td>
        <td>{row.SKU}</td>
        <td>{row.ProductName}</td>
        <td>{row.Price}</td>
        <td>{row.Date}</td>
        <td><button onClick={() => props.updateCharacter(index)}>Update</button></td>
      </tr>
      )
  })
  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  const {characterData, updateCharacter} = props
  
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} updateCharacter={updateCharacter} />
      </table>
    )
  }

export default Table;