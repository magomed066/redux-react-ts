import React from 'react'
import { Alert } from 'react-bootstrap'
import { Props } from './types'

const ErrorMessage: React.FC<Props> = ({ variant, text }) => {
	return <Alert variant={variant}>{text}</Alert>
}

export default ErrorMessage
