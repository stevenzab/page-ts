import React from 'react'
import '../styles/box_info.css'

type BoxProps = {
	title: string;
	subtitle: string;
	text: string;
	icon?: React.ReactNode;
	icon2?: React.ReactNode;
	icon3?: React.ReactNode;
	titreicon1?: string;
	titreicon2?: string;
	titreicon3?: string;
	logo?: React.ReactNode | string;
}

const Box = (props: BoxProps) => {
	return (
		<div className='container-box'>
			<div className='container-box-logo'>
				<div className='container-box-logo-img'>
					{props.logo}
				</div>
				<div>
					<div className='container-box-title'>{props.title}</div>
					<div className='container-box-subtitle'>{props.subtitle}</div>
				</div>
			</div>
			<div className='container-box-text'>{props.text}</div>
			<div className='container-box-icon'>
				{props.icon} {props.titreicon1}
				{props.icon2} {props.titreicon2}
				{props.icon3} {props.titreicon3}
			</div>
		</div>
	);
};

export default Box