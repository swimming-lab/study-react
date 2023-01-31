import React, { useState } from 'react';

const Input = () => {
	const [ inputs, setInputs ] = useState({
		name: '',
		email: '',
		tel: '',
	});

	const { name, email, tel } = inputs;

	const changeValue = (e) => {
		const id = e.target.id;
		const value = e.target.value;

		setInputs({
			...inputs,
			[id]: value
		});
	}

	return (
		<div>
			<div>
				<lebel>이름</lebel>
				<input type="text" id="name" value={name} onChange={changeValue} />
			</div>
			<div>
				<lebel>이메일</lebel>
				<input type="email" id="email" value={email} onChange={changeValue} />
			</div>
			<div>
				<lebel>전화번호</lebel>
				<input type="tel" id="tel" value={tel} onChange={changeValue} />
			</div>
			<div>
				<p>이름: {name}</p>
				<p>이메일: {email}</p>
				<p>전화번호: {tel}</p>
			</div>
		</div>
	);
}

export default Input;