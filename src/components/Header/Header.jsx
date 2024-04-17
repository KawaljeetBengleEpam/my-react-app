import React from 'react';
import HeaderLogo from '../../assets/headerLogo.jpeg';

function Header(props) {
	return (
		<>
			<div className='container'>
				<div className='d-flex justify-content-between'>
					<div>
						<img src={HeaderLogo} height='70' width='50' alt='logo'></img>
					</div>
					<div>{props.name} </div>
				</div>
			</div>
		</>
	);
}

export default Header;
