/* eslint-disable default-case */
//TYPES

const SET_VIEWS = 'SET_VIEWS';
const SET_ALIAS = 'SET_ALIAS';

export default function Reducer(state, action) {
	const { payload, type } = action;
	switch (type) {
		case SET_VIEWS:
			return {
				views: [...state.views, payload],
				alias: state.alias,
			};

		case SET_ALIAS:
			return {
				views: [...state.views],
				alias: payload,
			};
	}
}
