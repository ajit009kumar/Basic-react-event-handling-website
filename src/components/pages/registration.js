"use strict"
import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postBook,updateItem,setNull} from '../../actions/booksActions';
import BookList from './bookList';

class Registration extends React.Component {
	constructor(props){
		super(props);
		this.x = 4;
		this.state =  {
		  id: '',
          date: '',
          time: '',
          description: '',
          number_of_people_following_the_event: '',
          editedMode: false
      }
	};

	handleSubmit(){
		const book = [{
			id: this.x++,
			date:findDOMNode(this.refs.date).value,
			time: findDOMNode(this.refs.time).value,
			description: findDOMNode(this.refs.description).value,
			number_of_people_following_the_event: findDOMNode(this.refs.no_of_people).value
		}]
		this.props.postBook(book);
		this.setFieldValue();
	}

	setFieldValue(){
		this.setState(...this,{
			date:'',
			time: '',
			description: '',
			number_of_people_following_the_event: ''
		})
	}

	onUpdate = (idValue) => {
        this.props.updateItem(this.state,idValue);	
		this.setState(...this,{
			date:'',
			time: '',
			description: '',
			number_of_people_following_the_event: ''
		});
    }

	render(){
		if(this.props.editedMode){
			this.state.date= this.props.editedValue.date ;
			this.state.time= this.props.editedValue.time ;
			this.state.description= this.props.editedValue.description ;
			this.state.number_of_people_following_the_event= this.props.editedValue.number_of_people_following_the_event ;
			this.props.toggleState();
		}
		return(
			<Well>
			    <Panel>
			    	<FormGroup controlId = "date">
			 	   		<ControlLabel> Date </ControlLabel>
			     		<FormControl
			     			value = {this.state.date }
			     			onChange={(e)=>{
			     				this.setState({
			     					date : e.target.value,
			     					time: this.state.time ,
			     					description: this.state.description ,
			     					number_of_people_following_the_event: this.state.number_of_people_following_the_event 
			  
			     				})
			     			}}
		           			type = "date"
			           		placeholder = "Enter Date"
			           		ref = "date" />
			     		</FormGroup>
			   	

			    
			     	<FormGroup controlId = "time">
			        	<ControlLabel> Time </ControlLabel>
			       		<FormControl
			       		    value = {this.state.time }
			       		    onChange={(e)=>{
			     				this.setState({
			   						date: this.state.date,
			     					time : e.target.value,
			     					description:  this.state.description ,
			     					number_of_people_following_the_event: this.state.number_of_people_following_the_event 
			     					
			     				})
			     			}}
			           		type = "time"
			           		placeholder = "Enter Time"
			          		ref = "time" />
			    	</FormGroup>
			   

			  
			  		<FormGroup controlId = "description">
			 	   		<ControlLabel> Description </ControlLabel>
			       		<FormControl
			       			value = {this.state.description }
			       			onChange={(e)=>{
			     				this.setState({
			     					date: this.state.date ,
			     					time: this.state.time ,
			     					description: e.target.value,
			     					number_of_people_following_the_event: this.state.number_of_people_following_the_event 
			     					
			     				})
			     			}}
			           		type = "text"
			          		 placeholder = "Enter Description"
			           		 ref = "description" />
			   		</FormGroup>
			 

			   
			  		<FormGroup controlId = "no_of_people">
			 	   		<ControlLabel> Number Of People Following The Event </ControlLabel>
			       		<FormControl
			       			value = {this.state.number_of_people_following_the_event}
			       			 onChange={(e)=>{
			     				this.setState({
			     					date: this.state.date ,
			     					time: this.state.time ,
			     					description: this.state.description ,
			     					number_of_people_following_the_event : e.target.value,
			     					
			     				})
			     			}}
			           		type = "Number"
							placeholder = "Enter Number"
							ref = "no_of_people" />
			   		</FormGroup>
			   

			   
			      <Button onClick = {this.handleSubmit.bind(this)} bsStyle="primary"> Save </Button> {" "}
			      <Button onClick = {this.onUpdate.bind(this,this.props.editedValue.id)} bsStyle="success"> Update </Button>
 			    </Panel>

			</Well>			
		)
	}
}

function mapStateToProps(state){
	return{
		books: state.books.books
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({
		postBook:postBook,
		updateItem: updateItem,
		setNull:setNull
	},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps) (Registration);