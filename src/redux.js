function createStore(reducer) {
	// Para mantener todo el estado de la aplicación
	// Primer principio de redux: Todo el estado se 
	// almacena dentro de un solo objeto
	let state = {};
	const subscribers = [];

	const store = {
		getState() {
			// Obtener el estado
			return { ...state };

		},

		dispatch(action) {
			// Emitir acción
			// Acá entran los reducers.
			state = reducer(state, action);

			for (const callback of subscribers) {
				callback(state);
			}

		},

		subscribe(callback) {
			// subscribirse al redux
			// se llama cada vez q hay un cambio en el estado
			subscribers.push(callback);

			/*
				- Cada vez hay cambio del estado es debido a q se emitio una acción
				- Cada vez q se emite una action es pq se manda a llamar un dispatch
				- Cada vez que dispatch manda a llamar un reducer regresa un nuevo estado

			*/
		},

	};

	return store;
}

export { createStore }