"use strict"
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import React from 'react';
import {render} from 'react-dom';
import BookList from './components/pages/bookList';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
// import combined reducers

import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBook,deleteBook,updateBook} from './actions/booksActions';


//step 1 create the store
const middleware = applyMiddleware(thunk,logger);
const store = createStore(reducers,middleware);
/*store.subscribe(function(){
	console.log('current state is:', store.getState());
	//console.log('current time is:',store.getState().books[1].time);
})*/

render(
	 <Provider store = {store} >
	 <BookList /> 
	 </Provider>,
	 document.getElementById('app')
);


//step2 create and dispatch actions

//store.dispatch(postBook([

    //	{
    //		id: 1,
    //		date: '12/09/2017',
    //		time: '10:30 A.M',
    //		description: 'campus hiring for software developer',
    //		number_of_people_following_the_event: 100
    //	},

    //	{
    //		id: 2,
    //		date: '13/09/2017',
    //		time: '11:30 A.M',
    //		description: 'campus hiring for management',
    //		number_of_people_following_the_event: 80
    //	},

    //	{

    //		id: 3,
    //		date: '14/09/2017',
    //		time: '12:30 P.M',
    //		description: 'campus hiring for product manager',
    //		number_of_people_following_the_event: 110
    //	}

    //	]))


//Delete an item in an array

//store.dispatch(deleteBook(

  //  	{
    //		id: 1,
    //	} ))

//Update an item in an array

//store.dispatch(updateBook({
	//	id: 2,
	//	description: "campus hiring for testing",
	//	date: "20/09/2017"
//	}))

//add to cart

//store.dispatch(addToCart([{id: 2,number_of_item: 12}]))