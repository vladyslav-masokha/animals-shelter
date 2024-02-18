import styles from '../../ui/Form/Form.module.scss'

interface ErrorMessagesProps {
	errorMessage: string | null
}

const ErrorMessages: React.FC<ErrorMessagesProps> = ({ errorMessage }) => {
	return errorMessage ? (
		<div className={styles.errorMessage}>{errorMessage}</div>
	) : null
}

export { ErrorMessages }
