import React from 'react';
import HeaderLogo from '../../assets/headerLogo.jpeg';

function Header(props) {
	return (
		<>
			<div>
				<img src={HeaderLogo} height='70' width='50' alt='logo'></img>
			</div>
			<div className=''>{props.name} </div>
		</>
	);
}

export default Header;
