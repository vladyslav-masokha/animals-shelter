import { Button } from '@mui/material'
import styles from '../Form.module.scss'

interface AuthBtnResetPasswordProps {
	handleResetClick: () => void
}

const AuthBtnResetPassword: React.FC<AuthBtnResetPasswordProps> = ({
	handleResetClick,
}) => {
	return (
		<Button
			variant='text'
			className={styles.resetBtn}
			onClick={handleResetClick}
		>
			Скинути
		</Button>
	)
}

export { AuthBtnResetPassword }
