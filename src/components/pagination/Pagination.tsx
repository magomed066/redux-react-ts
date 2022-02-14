import React, { useState } from 'react'
import { Pagination as PaginationComp } from 'react-bootstrap'
import { useAction } from '../../hooks/useAction'
import { Props } from './types'

const Pagination: React.FC<Props> = ({ items }) => {
	const [active, setActive] = useState(1)
	const { setTodoPage } = useAction()

	return (
		<PaginationComp className="mt-5 m3-auto">
			{items.map((number) => (
				<PaginationComp.Item
					key={number}
					active={number === active}
					onClick={() => {
						setActive(number)
						setTodoPage(number)
					}}
				>
					{number}
				</PaginationComp.Item>
			))}
		</PaginationComp>
	)
}

export default Pagination
