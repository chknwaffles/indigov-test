export default function DataTable({ data, handleData }) {
	const formatHeaders = (header) => {
		//capitalize first letter
		let newHeader = header.charAt(0).toUpperCase() + header.slice(1);

		//find other capitalized letters, split then join with space
		return newHeader
			.match(/([A-Z]?[^A-Z]*)/g)
			.slice(0, -1)
			.join(' ');
	};

	const renderHeaders = () => {
		if (data.length > 0) {
			return (
				<tr>
					{Object.keys(data[0]).map((col, i) => (
						<th key={i}>{formatHeaders(col)}</th>
					))}
				</tr>
			);
		}
	};
	const renderData = () => {
		return data.map((col, i) => {
			return (
				<tr key={i}>
					{Object.values(col).map((val) => (
						<td key={val}>{val}</td>
					))}
				</tr>
			);
		});
	};

	return (
		<div className="data-table">
			<table>
				<thead>{renderHeaders()}</thead>
				<tbody>{renderData()}</tbody>
			</table>
		</div>
	);
}
