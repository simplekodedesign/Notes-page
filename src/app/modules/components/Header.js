import React,{useState} from "react"
import {Link} from "react-router-dom"

import "../css/header.css"

const Header = () => {

	const [menu,setMenu] = useState(-50)

	function handleBtnMenu(){
		menu == -50 ? setMenu(0) : setMenu(-50)
		document.getElementById("contMenu").style.transform = "translateY("+menu+"vh)"
	}

	return (
		<nav>
			<img src="img/menu_icon.svg" className="btnIcon" onClick={handleBtnMenu}/>
			<div id="contMenu">
				<Link to="/home">Tasks</Link>
				<Link to="/home/add">Add</Link>
			</div>
		</nav>
	)
}

export default Header