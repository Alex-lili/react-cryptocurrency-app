import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './table.js';
import './pageA.css';

function PageA() {
	const [ result, setResult ] = useState([])

	function fetchData() {

    axios.get('api/markets')
    .then((response) => {
        let spotcoins = response.data.result.filter(
            ticker => ticker.type === 'spot' 
            && (ticker.baseCurrency === 'BTC' 
            || ticker.baseCurrency === 'ETH'))
        setResult(spotcoins)
    })
	}

	useEffect(() => {
    const firstFetch = setTimeout(fetchData, 0)
    const refreshPage = setInterval(fetchData, 10000)

    return () => {
    	clearTimeout(firstFetch)
    	clearInterval(refreshPage)
    }}, [])

	return(
		<div className='spotMarket-container'>
			<h1 className='spotMarket'>Spot Market ( BTC , ETH )</h1>
			<Table className='table' result={result} />
		</div>
	)
}

export default PageA
