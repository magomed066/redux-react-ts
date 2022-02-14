import React from 'react'
import { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/usedTypesSelector'
import ErrorMessage from '../error-message/ErrorMessage'
import Skeleton from '../skeleton/Skeleton'
import Spinner from '../spinner/Spinner'

const TodoList: React.FC = () => {
	const { page, limit, error, loading, todos } = useTypedSelector(
		(store) => store.todo,
	)
	const { fetchTodos } = useAction()

	useEffect(() => {
		fetchTodos(page, limit)
	}, [page])

	if (loading) {
		return <Spinner />
	}

	if (error) {
		return <ErrorMessage text={error} variant="danger" />
	}

	return (
		<ListGroup>
			{todos.map((todo) => (
				<ListGroup.Item key={todo.id}>
					{todo.id} - {todo.title}
				</ListGroup.Item>
			))}
		</ListGroup>
	)
}

export default TodoList
