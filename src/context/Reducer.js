//TYPES

const SET_VIEWS = 'SET_VIEWS';
const SET_ALIAS = 'SET_ALIAS';
const SET_PUNTAJE = 'SET_PUNTAJE';

export default function Reducer(state, action) {
	const { payload, type } = action;
	switch (type) {
		case SET_VIEWS:
			return {
				// ...state,
				views: [...state.views, payload],
				alias: state.alias,
			};
		case SET_PUNTAJE:
			return {
				views: [...state.views, payload],
			};
		case SET_ALIAS:
			return {
				views: [...state.views],
				alias: payload,
			};
	}
}
