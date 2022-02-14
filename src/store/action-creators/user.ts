import axios from 'axios'
import { Dispatch } from 'redux'
import { UserAction, UserActionTypes } from '../../types/user'

export const fetctUsers = () => async (dispatch: Dispatch<UserAction>) => {
	try {
		dispatch({ type: UserActionTypes.FETCH_USERS })

		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/users',
		)

		setTimeout(() => {
			dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: data })
		}, 500)
	} catch (e) {
		dispatch({
			type: UserActionTypes.FETCH_USERS_ERROR,
			payload: 'Something went wrong! Try again later!',
		})
	}
}
