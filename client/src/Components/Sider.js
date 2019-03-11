import React from 'react';
import './Sider.css';


class Sider extends  React.Component{
	
	constructor(props){
	super(props);
		this.state={
			flex_sider_elemenet : "flex-sider-element",
			selected_flex_sider_element : "selected-flex-sider-element",
			selected : "CyberArk",
		}

	}

	changeCss = (e)=>{
		console.log(e.target.id)
		this.setState({
			selected:e.target.id,
		})
	}

	render(){
		return(
			<div className="flex-sider-container" id="style-1">
				<div id="CyberArk" onClick={this.changeCss}  className={this.state.selected == "CyberArk" ? "selected-flex-sider-element" : "flex-sider-element"}>
						CyberArk
				</div>

				<div id="Sailpoint" onClick={this.changeCss}  className={this.state.selected == "Sailpoint" ? "selected-flex-sider-element" : "flex-sider-element"}>
						Sailpoint
				</div>

				<div id="Splunk" onClick={this.changeCss}  className={this.state.selected == "Splunk" ? "selected-flex-sider-element" : "flex-sider-element"}>
						Splunk
				</div>

				<div id="Devops" onClick={this.changeCss}  className={this.state.selected == "Devops" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Devops
				</div>

				<div id="AWS" onClick={this.changeCss}  className={this.state.selected == "AWS" ? "selected-flex-sider-element" : "flex-sider-element"}>
						AWS
				</div>

				<div id="C,C++" onClick={this.changeCss}  className={this.state.selected == "C,C++" ? "selected-flex-sider-element" : "flex-sider-element"} >
						C,C++
				</div>

				<div id="SalesForce" onClick={this.changeCss}  className={this.state.selected == "SalesForce" ? "selected-flex-sider-element" : "flex-sider-element"} >
						SalesForce
				</div>

				<div id="Big Data" onClick={this.changeCss}  className={this.state.selected == "Big Data" ? "selected-flex-sider-element" : "flex-sider-element"}>
						Big Data
				</div>

				<div id="Tableau" onClick={this.changeCss}  className={this.state.selected == "Tableau" ? "selected-flex-sider-element" : "flex-sider-element"}>
						Tableau
				</div>

				<div id="QlikView" onClick={this.changeCss}  className={this.state.selected == "QlikView" ? "selected-flex-sider-element" : "flex-sider-element"}>
						QlikView
				</div>

				<div id="Cognos" onClick={this.changeCss}  className={this.state.selected == "Cognos" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Cognos
				</div>

			</div>

			)
		}
	}


export default Sider;
