import React from "react";
import { Link } from "react-router-dom"

const Nav = () => {
	return (
		<nav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/counter">Counter</Link></li>
				<li><Link to="/input">Input</Link></li>
				<li><Link to="/user-list">UserList</Link></li>
			</ul>
		</nav>
	);
}

export default Nav;