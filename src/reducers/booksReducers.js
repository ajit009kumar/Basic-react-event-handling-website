"use strict"

//Book Reducers
//step 3 define reducers
export function booksReducers(state = {books:[]},action)
{
	switch(action.type){
		case "POST_BOOK":
			let books = state.books.concat(action.payload);
				return {books:books};
				break;

        case "GET_BOOKS":
            return{...state, books:[...action.payload]}
            break;


        case "SET_NULL":
            break;


        case "DELETE_ITEM":
            //console.log('====>',action.payload);
            //books = state.map((book) =>{
             // return book;
           // });
            //console.log('======>',books);

            return {...state,books:action.payload}
        	/*{//create a copy of the book array
                        const currentbook_to_delete = state.books;
                        //determine in which index in book array is the object to delete
                        const indextodelete = currentbook_to_delete.findIndex(
                            function(book){
                                return book.id == action.payload.id;
                            }
            
                        )}

        	return {books:(currentbook_to_delete.slice(0,indextodelete),currentbook_to_delete.slice(indextodelete+1))};*/
         	break;

        case "UPDATE_ITEM":
          const current_book_to_update = state.books;
          console.log("current_book_to_update===>",current_book_to_update);
        	const indextoupdate =  current_book_to_update.findIndex(
        		function(book){
        			return book._id == action.payload.id;
        		}

        	)
            
            const newBookToUpdate = {
                 ...current_book_to_update[indextoupdate],
                 description: action.payload.description,
                 date: action.payload.date,
                 time: action.payload.time,
                 number_of_people_following_the_event: action.payload.number_of_people_following_the_event
            }
            return {books:([...current_book_to_update.slice(0,indextoupdate),newBookToUpdate,...current_book_to_update.slice(indextoupdate+1)])};
           
            break;

        default:
            console.log("action-type action-payload",action.type,action.payload);


	}
    return state  
}
