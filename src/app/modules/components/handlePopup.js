export default (txt) => {
	let popup = document.createElement("p")
	let app = document.getElementById("app")
	let id = "popup"+Math.floor(Math.random() * 1000)
	popup.classList.add("popup")
	popup.setAttribute("id",id)
	popup.appendChild(document.createTextNode(txt))
	app.appendChild(popup)
	popup = document.getElementById(id)
	window.setTimeout(() => {		
		popup.style.opacity = "1"
		popup.style.transform = "translateY(0)"
	},500)
	window.setTimeout(() => {
		popup.style.opacity = "0"
		popup.style.transform = "translateY(-20px)"	
		window.setTimeout(() => {
			popup.remove()
		},500)
	},3500)
}