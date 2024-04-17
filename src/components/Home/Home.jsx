import Header from '../Header/Header';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	const msg = 'Kawaljeet';
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const response = await fetch('https://api.github.com/users');
			const data = await response.json();
			setUsers(data);
		} catch (error) {
			console.error('Error fetching users:', error);
		}
	};

	return (
		<div>
			<Header name={msg}></Header>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<Link to={`/user/${user.login}`}>{user.login}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
