import { createStore } from './redux';

function reducer(state = {}, action) {
	switch(action.type) {
		case 'NUEVA':
			return action.payload;

		default:
			return state;
	}
}

const store = createStore(reducer);

store.subscribe(() => {
	const state = store.getState();
			
	// console.log('subscribe');
	console.log(state);
});



setInterval(() => {
	store.dispatch({
		type: 'NUEVA',
		payload: {
			value: Math.random(),
		},
	});
}, 1000);