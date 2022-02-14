import { Col, Container, Row } from 'react-bootstrap'
import Pagination from '../pagination/Pagination'
import TodoList from '../todo-list/TodoList'
import UsersList from '../users-list/UsersList'

const App = () => {
	return (
		<div className="App">
			<Container className="pt-4">
				<Row className="d-flex justify-content-center">
					<Col xs={12} sm={12} md={6}>
						<h2 className="mb-4 text-center">Users list</h2>
						<UsersList />
					</Col>
					<Col xs={12} sm={12} md={6}>
						<h2 className="mb-4 text-center">Todos list</h2>
						<TodoList />
					</Col>
				</Row>
				<Row className="d-flex justify-content-end">
					<Col xs={12} sm={12} md={4}>
						<Pagination items={[1, 2, 3, 4, 5]} />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default App
