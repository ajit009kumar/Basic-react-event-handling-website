"use strict"
import axios from 'axios';

//Get a Book

/*export function getBooks (book){
	return{

		type: "GET_BOOKS",
		
	}
}*/

export function getBooks(){
	return function(dispatch){
		axios.get("/books")
		  .then(function(response){
		  	dispatch({
		  		type: "GET_BOOKS",
		  		payload: response.data
		  	})
		  })
		  .catch(function(err){
		  		dispatch({
		  			type: "GET_BOOKS_REJECTED",
		  			payload: "there was an error while getting the book from database"
		  		})	
		  })
	}
}

//POST A BOOK

/*export function postBook (book){
	return{

		type: "POST_BOOK",
		payload: book
	}
}*/

export function postBook(book){
	return function(dispatch){
		axios.post("/books", book)
			.then(function(response){
				dispatch(
					{ type:"POST_BOOK", 
					  payload: response.data
					})
			})
			.catch(function(err){
				dispatch(
					{	type:"POST_BOOK_REJECTED",
						payload: "there was an error while posting the new book"
					})
			})
	}
}


//delete a book 

/*export function deleteItem (book){
	return {
		type: "DELETE_ITEM",
		payload: book 
	}
}*/

export function deleteItem(id,book){
	return function(dispatch){
		axios.delete("/books/" + id)
			.then(function(response){
				dispatch({
					type: "DELETE_ITEM",
					payload: book
				})
			})

			.catch(function(err){
				dispatch({
					type: "DELETE_ITEM_REJECTED",
					payload: "there was an error while deleting the bookitem"
			    })
			})

	}
}



export function setNull (book){
	console.log("booksAction===>",book);
	return{
		type: "SET_NULL",
		payload: {
			date: book.date,
			time: book.time,
			description: book.description,
			number_of_people_following_the_event: book.number_of_people_following_the_event
		}
	}
}


export function updateItem(book,idValue){
	console.log("books====>",book);
	return function(dispatch){
		axios.put("/books/" + idValue,book)
			.then(function(response){
				dispatch({
					type: "UPDATE_ITEM",
					payload: {
						id: idValue,
						date: book.date,
						time: book.time,
						description: book.description,
						number_of_people_following_the_event: book.number_of_people_following_the_event

					}
				})
			})

			.catch(function(err){
				dispatch({
					type: "UPDATE_ITEM_REJECTED",
					payload: "there was a problem while updating the books"
				})
			})
	}
}


//update a book 

/*export function updateItem (book,idValue){
	console.log("Book===>",book);
	console.log("id===>",idValue);
	console.log("date==>",book.date);
	return {
		type: "UPDATE_ITEM",
		payload:{
			id: idValue,
			date: book.date,
			time: book.time,
			description: book.description,
			number_of_people_following_the_event: book.number_of_people_following_the_event
		}
	}

}*/