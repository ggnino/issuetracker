import React, { useState } from "react";
import Axios from "axios";
import lockIcon from "../imgs/lock.png";
import deleteIcon from "../imgs/trash.png";

function Issue(props) {
    // Destructing props
	let { data } = props;
	let color,
        alert = "";
    // State for animations/style and updating component
	const [status, setStatus] = useState(data.status);
	const [update, setUpdate] = useState(data.updated);
	const [animate, setAnimate] = useState("");
	const [ani2, setAni2] = useState("");
	let [style, setStyle] = useState({ borderBottom: "2px solid red" });

	if (status === "Close") {
		style = { borderBottom: "2px solid gold" };
		color = { color: "gold" };
	} else {
		alert = "ld ld-damage";
		color = { color: "red" };
	}

    // Event handler for deleting issue
	const onDel = () => {
		Axios.delete("/techissues" + data._id).then(() =>
			console.log("Delete Successful")
		);
		window.location.reload();
	};
    // Event handler for hovering animations on/off
	const onHover = () => {
		setAnimate("ld ld-wander-v");
	};
	const offHover = () => {
		setAnimate("");
	};
	const offMouse = () => {
		setAni2("");
	};
	const onMouse = () => {
		setAni2("ld ld-tremble");
	};
    // Event handler for updating component
	const closeStatus = () => {
		setStatus("Close");
		setUpdate(new Date().toLocaleString().toString());
		setStyle({ borderBottom: "2px solid gold" });
		console.log(update);
		Axios.put("/techissues" + data._id, {
			status: "Close",
			updated: new Date().toLocaleString().toString(),
		}).then(() => {
			console.log("Updated Status Successful");
		});
	};
    // Rendering component
	return (
		<div className="card m-2">
			<div className="card-header" style={style}>
				<h1>{data.subject}</h1>
				<h3>{data.name}</h3>
				<h3 className={alert} style={color}>
					{status}
				</h3>
			</div>
			<div className="card-body">
				<h4>Description:</h4>
				<p className="card-text">{data.issue}</p>
				<h4>Created on:</h4>
				<p className="card-text">{data.created}</p>
				<h4>Updated On:</h4>
				<p className="card-text">{update}</p>
			</div>
			<div className="card-footer">
				<button
					onMouseOver={onHover}
					onMouseOut={offHover}
					onClick={closeStatus}
					className="btn btn-warning"
				>
					Close Issue
					<img className={animate} alt="lock icon" src={lockIcon} />
				</button>
				<button
					onMouseOver={onMouse}
					onMouseOut={offMouse}
					onClick={onDel}
					className="btn btn-danger"
				>
					Delete Issue
					<img className={ani2} alt="delete icon" src={deleteIcon} />
				</button>
			</div>
		</div>
	);
}

export default Issue;
