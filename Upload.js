import React from "react";
import {render} from "react-dom";
import {Header} from "./Header";
import upload from "./../css/assets/upload.png";
import save from "./../css/assets/save.png";
import rite from "./../css/assets/rite.jpg";
import wrong from "./../css/assets/wrong.jpg";


export class Upload extends React.Component {
	state = {
		name : "",
		id : "",
		image : "",
		errors : {}
	}
	handleChange = (e) => {
		if(!!this.state.errors[e.target.name]) {
			let errors = Object.assign({} , this.state.errors);
		delete errors[e.target.name];
		this.setState({
			[e.target.name] : e.target.value ,
			errors
		});
	} else {
		this.setState({[e.target.name] : e.target.value});
	}
		
	}

	handleClick = (e) => {
		e.preventDefault();

		// Validation

		let errors ={};
		if(this.state.name === "") {
		 errors.name="Enter User / Uploader's Information";
		} 
		if(this.state.name === "Banking" || this.state.name === "Entertainment"|| this.state.name === "Retail"|| this.state.name === "Education"|| this.state.name === "Healthcare") {
			errors.name=<img src={rite} />;
		} else {
			errors.name="Enter User / Uploader's Information";
		}
		if(this.state.id === "") {
			errors.id=<img src={wrong} />;
		} else {
			errors.id=<img src={rite} />;
		}
		if(this.state.image === "") {
			errors.image=<img src={wrong} />;
		} else {
			 errors.image=<img src={rite} />;
		}


		this.setState({errors});

	}
	render() {
		return(
			
			<main>
				<section>
					<div className="uploadBox">
						<div className="uploadTab">
							<img src={upload} alt="upload icon"/>
							<span>Upload an image from your desktop</span>
						</div>
						<form className="imageUploadForm">
							<table>
								<tbody>
									<tr>
										<td><label htmlFor="name">Name:</label></td>
										<td><input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} className="form-control formName"/></td>
										<td className="validationMessage">{this.state.errors.name}</td>
									</tr>
									<tr>
										<td><label htmlFor="identity">ID:</label></td>
										<td><input type="text" id="identity" name="id" value={this.state.id} onChange={this.handleChange}  className="form-control formName"/></td>
										<td className="validationMessage">{this.state.errors.id}</td>
									</tr>
									<tr>
										<td><label htmlFor="image">Image:</label></td>
										<td><input type="text" id="image" name="image" value={this.state.image} onChange={this.handleChange}  className="form-control formName"/></td>
										<td className="validationMessage">{this.state.errors.image}</td>
									</tr>
								</tbody>
							</table>
							<button className="btn btn-default uploadFile" onClick={this.handleClick}><img src={save} alt="upload button icon"/>&ensp;UPLOAD A FILE</button>
						</form>
					</div>
				</section>
			</main>
			);
	}
}