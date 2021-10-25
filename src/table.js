import React from 'react';
import './table.css';

function Table({ result }) {

	const data = result.map((ticker) => (
		<tr >
			<td>{ticker.name}</td>
			<td>$ {ticker.bid.toLocaleString()}</td>
			<td>$ {ticker.ask.toLocaleString()}</td>
			<td>$ {ticker.price.toLocaleString()}</td>
            <td>{ticker.baseCurrency}</td>
            <td>$ {ticker.volumeUsd24h.toLocaleString()}</td>
		</tr>
	))

	return (
		<table className='table'>
			<thead>
				<tr>
					<th>Asset/Contract Name</th>
					<th>bid</th>
					<th>Ask</th>
					<th>Price</th>
					<th>Underlying Assist</th>
					<th>Volume in USD for last 24 hours</th>
				</tr>
			</thead>
			<tbody>{data}</tbody>
		</table>
	)
}

export default Table