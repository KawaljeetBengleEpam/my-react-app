import React from 'react';
import HeaderLogo from '../../assets/headerLogo.jpeg';

function Header(props) {
	return (
		<>
			<div className='row'>
				<div className='col-sm-6'>
					<img src={HeaderLogo} height='70' width='50' alt='logo'></img>
				</div>
				<div className='col-sm-6'>{props.name} </div>
			</div>
		</>
	);
}

export default Header;
