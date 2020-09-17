import React, { useState } from "react";
import Axios from "axios";
import issueImg from "../imgs/issue.png";
import d from "../imgs/technician2.png";

function UserPage() {
    // State for showing imgs and setting styles
	const [style, setStyle] = useState("form-group");
	const [showImg, setShowImg] = useState("none");
	const [h, setH] = useState("initial");
    const [subImg, setSubImg] = useState("");
    // State for user input
	const [userInput, setUserInput] = useState({
		name: "",
		subject: "",
		email: "",
		status: "Open",
		issue: "",
		created: "",
		updated: "",
	});
    // Variable to receive user input from form
    let input;
    
    // Event handler for submitting info to database/showing imgs on submit
	const clicker = (e) => {
		e.preventDefault();

		saveToDB();
		setStyle("form-group ld ld-blur-out");

		setH("80vh");
		setTimeout(() => {
			setShowImg("initial");
			setSubImg("ld ld-blur-in");
		}, 1000);
    };
    
    // Event handler for receiving user input
	const getInput = (e) => {
		input = e.target.value;
		setUserInput({ ...userInput, [e.target.name]: input });
		
    };
    // Event handler for saving to actual database
	const saveToDB = () => {
		userInput.created = new Date().toLocaleString();
		console.log(userInput.created);
		Axios.post("/techissues", { ...userInput })
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
    };
    
    // Rendering Component
	return (
		<div className="container-fluid" id="userPage">
			<div style={{ height: h }}>
				<span>
					<h2 className={subImg} style={{ display: showImg }}>
						Thank You!
					</h2>
					<img
						className={subImg}
						alt="submit message img"
						id="submitImg"
						style={{ display: showImg }}
						src={d}
					/>
					<h3 className={subImg} style={{ display: showImg }}>
						A technician will get back to you shortly.
					</h3>
				</span>
				<form onSubmit={clicker} className={style} id="issueForm">
					<img
						className="img-fluid"
						alt="heading img"
						id="headImg"
						src={issueImg}
					/>
					<label>Name:</label>
					<input
						name="name"
						onChange={getInput}
						className="form-control"
						type="text"
					/>
					<label>Subject:</label>
					<input
						name="subject"
						onChange={getInput}
						className="form-control"
						type="text"
					/>
					<label>Email:</label>
					<input
						name="email"
						onChange={getInput}
						className="form-control"
						type="email"
					/>
					<label>Issue:</label>
					<textarea name="issue" onChange={getInput} className="form-control" />
					<button className="btn btn-warning m-2" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default UserPage;
