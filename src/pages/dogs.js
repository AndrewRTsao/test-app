import React from 'react';
import { useState, useEffect } from "react";

const Dogs = () => {

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

  	useEffect(() => {
    	fetch(`https://api.thedogapi.com/v1/breeds?limit=10`)
		.then((response) => {
			if (!response.ok) {
			throw new Error(
				`This is an HTTP error: The status is ${response.status}`
			);
			}
			//console.log(response)
			return response.json();
		})
		.then((actualData) => {
			//console.log(actualData)
			setData(actualData);
			setError(null);
		})
		.catch((err) => {
			setError(err.message);
			setData(null);
		})
		.finally(() => {
			setLoading(false);
		});
	}, []);

	return (
		<div>
		<h1>Check this page for dogs looking for friends!</h1>

		
		<h2>Some breeds that we have available</h2>
			{loading && <div>A moment please...</div>}
			{error && (
				<div>{`There is a problem fetching the post data - ${error}`}</div>
			)}
			<ul>
				{data &&
				data.map(({ id, name }) => (
					<li key={id}>
					<h3>{name}</h3>
					</li>
				))}
			</ul>
		</div>
	)
};

export default Dogs;
