import React from "react";
import '../styles/card.css';

type CardProps = {
	title: string;
	text: string;
	width?: number;
	height?: number;
	icon?: string;
};

const Card: React.FC<CardProps> = ({ title, text, width, height, icon }) => {
	return (
		<div className="container-body">
			<div className="container-body-left">{title}</div>
			<div className="container-body-text">{text}</div>
		</div>
	);
}

export default Card;