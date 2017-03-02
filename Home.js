import React from "react";
import {render} from "react-dom";
import {Header} from "./Header";
import login from "./../css/assets/Login32x32.png";
import values from "./../data/images.json";


export class Home extends React.Component {
	state = {
		userName : "",
		Password : "",
		login: {}
	}
	handleChange = (e) => {
	 {
		this.setState({
		[e.target.name] : e.target.value ,login
		});
	} 	
	}
	verify = (e) => {
		{	
			for(var property in values)
			{
				if(property==="admin")
				{	
					if(this.state.userName===values[property].user && this.state.Password===values[property].password)
					{
						alert("Login Successful");
					}
					else
					{
						alert("Login Unsuccessful");		}
				}
			}
		}

}		
	render() {
		return (
				<main>
					<section>
						<div className ='loginForm'>
							<h4>Gallery User Log In</h4>
							<form className = 'userLogin'>
								<input type = "text" placeholder="username" name="userName" value={this.state.userName} onChange={this.handleChange} className = 'form-control username'/>
								<input type = "password" name="Password" value={this.state.Password} onChange={this.handleChange} className = 'form-control password'  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"/>
								<img src={login} alt="login button" onClick={this.verify}/>
							</form>
							
						</div>
						<article>

							<div>
								<h1>WELCOME</h1>
							</div>
							<div>
								<h3>to the cognizant interactive image and UI gallery</h3>
							</div>
							<p>
								Lorem ipsum dolor sit amet, nullam incorrupte pro id. Pro choro omnesque perfecto ad, rebum epicurei appellantur ex quo. Sea ne illum intellegam, has ad graeco tamquam scriptorem. Vel cu quis vivendum incorrupte, consul oportere dissentiunt ut nec. An vitae aeterno argumentum mel. No sea dicta sapientem voluptaria, ex atqui necessitatibus per.Cu zril oblique cum, ex nobis integre invenire mea. Vis ut dico graeci argumentum, an duo ignota audire. Usu alii legere philosophia ei, sanctus posidonium cotidieque eu duo. Ea mel dicat feugait lucilius, volumus tractatos adversarium ei vis. In mea nullam verterem, alii oratio vidisse cu his, ne his reque decore. Mutat errem sanctus te duo, eam eu brute meliore.Nec eu euismod facilis antiopam, quem omnium ei nec. Sumo iudico vel ei, te reque graece commodo pro. Tale alia movet eum in, quo error docendi mnesarchum te. Vis ea civibus consetetur, vim ea equidem recusabo euripidis. Mea id assum assentior omittantur, est at suas quot idque. Vix fugit laudem id, has aeterno docendi antiopam ei, sea ad feugait pertinax oportere.Nec eu euismod facilis antiopam, quem omnium ei nec.
							</p>
							<p>
								Ad has noster theophrastus, ferri modus ex his. No patrioque constituam efficiantur sit, an laudem numquam evertitur nam. Te singulis accusata qui. Ceteros constituto qui te, nam te assum graecis offendit, nostro commodo gloriatur sit at. Eu per ludus democritum, ei usu saepe diceret maiestatis.
							</p>
						</article>
					</section>
				</main>
			);
	}
}