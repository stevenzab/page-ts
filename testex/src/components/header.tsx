import React from "react";
import '../styles/header.css';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
	return (
		<div className="container-header">
			<h1 className="title-container-header">federage</h1>
			<div className="container-logo-header">
				<div className='right-header'>
					<AiOutlineMenu />
				</div>
			</div>
		</div>
	);
}

export default Header;