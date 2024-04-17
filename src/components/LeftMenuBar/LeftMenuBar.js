// LeftMenuBar.js
import React from 'react';

const LeftMenuBar = () => {
	const items = [];
	return (
		<div>
			<h1>Select an Item:</h1>
			<select>
				{items.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	);
};

export default LeftMenuBar;
