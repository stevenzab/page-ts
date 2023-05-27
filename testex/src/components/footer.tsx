import React from 'react';
import '../styles/footer.css';
import { SiTwitter } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
	return (
		<div className="container-footer">
			<div className='wrapper-footer'>
				<p className='string-footer'>FEDERAGE SAS • SIREN n°828743369</p>
				<p>• Paris • 2023</p>
			</div>
			<div className='logo-footer'>
				<SiTwitter />
				<AiFillGithub />
				<FiMail />
			</div>
		</div>
	);
}

export default Footer;