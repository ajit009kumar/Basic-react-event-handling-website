"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import {Grid,Col,Row,Button} from 'react-bootstrap';
import Registration from './registration';
import {deleteItem} from '../../actions/booksActions';
import {findDOMNode} from 'react-dom';
import {updateItem} from '../../actions/booksActions';

class BookList extends React.Component{
	constructor(props) {
      super(props);	

      this.state =  {
          id: '',
          date: '',
          time: '',
          description: '',
          number_of_people_following_the_event: '',
          editedMode: false
      }
     };



    componentDidMount(){
    	this.props.getBooks();
    }

    editValue = (id) => {
    	for(var i = 0; i < this.props.books.length; i++){
    		if(this.props.books[i]._id == id){
    			this.setState(...this.state,{
            id: id,
    				date: this.props.books[i].date,
    				time: this.props.books[i].time,
    				description: this.props.books[i].description,
    				number_of_people_following_the_event: this.props.books[i].number_of_people_following_the_event,
    				editedMode: !this.state.editedMode
                })
            break;
    		}
    	}
    }

    onDelete = (id) => {
    	const currentbook_to_delete = this.props.books;
        	//determine in which index in book array is the object to delete
        	const indextodelete = currentbook_to_delete.findIndex(
        		function(book){
        			return book._id == id;
        		}

        	)
        console.log("indextodelete===>",id,currentbook_to_delete);
        let booksAfterDeletion = [...currentbook_to_delete.slice(0,indextodelete),...currentbook_to_delete.slice(indextodelete+1)];
    	  this.props.deleteItem(id,booksAfterDeletion);

    }

    toggleState(){
    	this.setState(...this.state,{
    		editedMode: !this.state.editedMode
    	})
    }
   
	render(){
		const bookList = this.props.books.map(function(booksArray){
			return(
				<div key = {booksArray._id} >
				    <br />
				    {booksArray.date}  {" "}
				    {booksArray.time}  {" "}
				    {booksArray.description}  {" "} 
				    {booksArray.number_of_people_following_the_event} <br /> <br /> 
				    <Button onClick = {this.editValue.bind(this,booksArray._id)}> Edit </Button> {" "}
				    <Button onClick = {this.onDelete.bind(this,booksArray._id)} bsStyle="danger"> Delete </Button> {" "}
				  </div>
			)
		},this)

		return(
			<Grid>
			  <div> 
			    <h1> React App </h1>
			  </div>
			   <Row style = {{marginTop: '15px'}}> 
			   <Col xs = {10} sm = {6} >
			   <Registration

			   		editedValue = {this.state} 
			   		editedMode = {this.state.editedMode}
			   		toggleState = {this.toggleState.bind(this)} />
			   </Col>
				{bookList}      
			   </Row>
			</Grid>
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
		getBooks: getBooks,
		deleteItem: deleteItem,
	},dispatch)
}

export default connect (mapStateToProps,mapDispatchToProps) (BookList);