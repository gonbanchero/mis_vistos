import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setError(null);
				setData(data.results);
			})
			.catch((err) => {
				setError(err);
			});
	}, [url]);

	return {
		error,
		data,
	};
};

export default useFetch;
