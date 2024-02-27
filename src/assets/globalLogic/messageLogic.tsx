import styles from '../ui/Form/Form.module.scss'

interface MessageLogicProps {
	successMessage: string | null
	errorMessage: string | null
}

const MessageLogic: React.FC<MessageLogicProps> = ({
	successMessage,
	errorMessage,
}) => {
	const logicStyles = () => {
		return errorMessage
			? styles.errorMessage
			: successMessage
			? styles.successMessage
			: ''
	}

	const logicMessage = () =>
		errorMessage ? errorMessage : successMessage ? successMessage : ''

	return <div className={logicStyles()}>{logicMessage()}</div>
}

export { MessageLogic }
