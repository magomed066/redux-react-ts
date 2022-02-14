import React from 'react'
import { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/usedTypesSelector'
import { fetctUsers } from '../../store/action-creators/user'
import ErrorMessage from '../error-message/ErrorMessage'
import Spinner from '../spinner/Spinner'

const UsersList: React.FC = () => {
	const { users, error, loading } = useTypedSelector((state) => state.user)
	const { fetctUsers } = useAction()

	useEffect(() => {
		fetctUsers()
	}, [])

	if (loading) {
		return <Spinner />
	}

	if (error) {
		return <ErrorMessage text={error} variant="danger" />
	}

	return (
		<ListGroup>
			{users.map((user) => (
				<ListGroup.Item key={user.id}>{user.name}</ListGroup.Item>
			))}
		</ListGroup>
	)
}

export default UsersList
