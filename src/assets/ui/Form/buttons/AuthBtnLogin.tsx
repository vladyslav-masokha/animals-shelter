import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from '../Form.module.scss'

interface AuthButtonProps {
	handleLoginClick: () => void
	isEmailValid: boolean
	isPasswordValid: boolean
}

const AuthBtnLogin: React.FC<AuthButtonProps> = ({
	handleLoginClick,
	isEmailValid,
	isPasswordValid,
}) => {
	return (
		<div className={styles.loginBtns}>
			<Button
				variant='text'
				onClick={handleLoginClick}
				disabled={!isEmailValid || !isPasswordValid}
			>
				Увійти
			</Button>
			<Link to='/register'>
				<Button variant='text'>Створити акаунт</Button>
			</Link>
		</div>
	)
}

export { AuthBtnLogin }
