import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import './logo.css';

var image =require('./logo.jpg');

class Logo extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<div>
				<Container fluid>
					<Row className="header">
							<Col xs={5} sm={4} md={3} lg={2} xl={2}>
								<div  >
								<img className="imground" style={{width:"100%",}} title="27TEKMASTERS" src={image}></img>
								</div>
							</Col>			
					</Row>
				</Container>
				</div>


			)
	}

}

export default Logo;