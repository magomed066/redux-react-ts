import React from 'react'
import { Spinner as SpinnerComp } from 'react-bootstrap'

const Spinner = () => {
	return (
		<div className="text-center mt-3">
			<SpinnerComp animation="grow" />
		</div>
	)
}

export default Spinner
