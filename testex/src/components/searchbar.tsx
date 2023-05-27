import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillFilterCircleFill } from 'react-icons/bs';
import '../styles/searchbar.css';

const SearchBar = () => {
	return (
		<div className="container-searchbar">
			<div className="container-searchbar-icon">
				<AiOutlineSearch />
			</div>
			<div className='text-holder'>Recherche</div>
			<div className='filter-icon'>
				<BsFillFilterCircleFill />
				A-Z
			</div>
		</div >
	);
}

export default SearchBar;