"use strict"

 //cart reducers

export function cartReducers (state = {carts:[]},action){
	
	switch(action.type){
	
		case "ADD_TO_CART":
		  //let carts = state.carts.concat(action.payload);
		  return {carts:[...state.carts,...action.payload]};
		  break;
	}

	return state;
}
 