<<<<<<< HEAD
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
=======
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
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
