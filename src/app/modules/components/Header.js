import React from "react"
import {Link} from "react-router-dom"

const Header = () => {
	return (
		<div>
			<Link to="/home">Tasks</Link>
			<Link to="/home/add">Add</Link>
		</div>
	)
}

export default Header