import React from "react";

function Navbar() {
	let d = { display: "none" };
	let h;
	// if on technician page show log out button and disable navbrand click
	if (window.location.pathname === "/technician") {
		d.display = "initial";
		h = { cursor: "default" };
	}
	if (window.location.pathname === "/") h = { cursor: "default" };

	// Rendering Component
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark fixed-top">
				<a className="navbar-brand" style={h} href="/">
					Issue Tracker
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active" id="log" style={d}>
							<a className="nav-link" href="/">
								Log Out
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
export default Navbar;
