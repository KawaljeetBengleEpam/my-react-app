import React from 'react';
import HeaderLogo from '../../assets/headerLogo.jpeg';

function Header(props) {
	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 align-items-left'>
						<img src={HeaderLogo} height='70' width='50' alt='logo'></img>
					</div>
					<div className='col-md-6 align-items-right'>{props.name} </div>
				</div>
			</div>
		</>
	);
}

export default Header;
