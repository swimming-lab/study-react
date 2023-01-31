import React from 'react';

const Thead = () => {
	return (
		<thead>
			<tr>
					<th>이름</th>
					<th>이메일</th>
			</tr>
		</thead>
	)
}

const User = ({ userData }) => {
	return (
		<tr>
				<td>{userData.name}</td>
				<td>{userData.email}</td>
		</tr>
	);
}

const UserList = () => {
	// TODO axios
	const users = [
		{ name: '유수영', email: 'soo@test.com' },
		{ name: '브라이언', email: 'bra@test.com' },
		{ name: '데이빗', email: 'de@test.com' },
	];

	return (
		<table>
			<Thead />
			<tbody>
				{users.map(user => <User userData={user} />)}
			</tbody>
		</table>
	);
}

export default UserList;