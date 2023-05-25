import React from 'react';
import '../styles/footer.css';
import { SiTwitter } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

function footer() {
	return (
		<div className="container">
			<div className='wrapper'>
				<p className='string'>FEDERAGE SAS • SIREN n°828743369 • Paris • 2023</p>
			</div>
			<div className='logo'>
				<SiTwitter />
				<AiFillGithub />
				<FiMail />
			</div>
		</div>
	);
}

export default footer;