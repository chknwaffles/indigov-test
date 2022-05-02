export default function DataTable({ perPage, handlePerPage, handleButton }) {
	const handleChange = (e) => handlePerPage(e.target.value);
	const handleSearch = (e) => {};

	return (
		<div className="settings-box">
			<input
				className="search-input"
				type="text"
				onChange={handleSearch}
				placeholder="Search for name, email, zipcode"
			/>
			<div className="data-button">
				<button onClick={handleButton}>Fetch New Data</button>
			</div>
			<div className="select-box">
				<label for="perPage">Constituents per page</label>
				<select id="perPage" value={perPage} onChange={handleChange}>
					<option value="20">20</option>
					<option value="30">30</option>
					<option value="40">40</option>
					<option value="50">50</option>
				</select>
			</div>
		</div>
	);
}
