import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

import DataTable from './components/DataTable';
import Settings from './components/Settings';
import './App.css';

function App() {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(0);
	const [perPage, setPerPage] = useState(20);
	const [searchValue, setSearchValue] = useState('');

	const fetchData = () => {
		let newData = [];

		for (let i = 0; i < perPage; i++) {
			let firstName = faker.name.firstName();
			let lastName = faker.name.lastName();
			let email = faker.internet.email(firstName, lastName);
			let zipCode = faker.address.zipCode();

			newData.push({ email, firstName, lastName, zipCode });
		}

		return newData;
	};

	useEffect(() => {
		const newData = fetchData();
		setData([...newData]);
	}, []);

	const handleButton = () => {
		let newData = fetchData();
		setData([...newData]);
	};

	const handleData = (newData) => setData([...newData]);

	const handlePerPage = (pageAmount) => setPerPage(pageAmount);

	return (
		<div className="App">
			<h1>Constituent Data</h1>
			<Settings perPage={perPage} handlePerPage={handlePerPage} handleButton={handleButton} />
			<DataTable data={data} handleData={handleData} />
		</div>
	);
}

export default App;
