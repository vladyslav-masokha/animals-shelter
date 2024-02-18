import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from '../Form.module.scss'

interface AuthButtonProps {
	handleRegisterClick: () => void
	isUserNameValid: boolean
	isEmailValid: boolean
	isPasswordValid: boolean
}

const AuthBtnRegister: React.FC<AuthButtonProps> = ({
	handleRegisterClick,
	isUserNameValid,
	isEmailValid,
	isPasswordValid,
}) => {
	return (
		<div className={styles.regBtns}>
			<Button
				variant='text'
				onClick={handleRegisterClick}
				disabled={!isUserNameValid || !isEmailValid || !isPasswordValid}
			>
				Зареєструватись
			</Button>
			<Link to='/login'>
				<Button variant='text'>Увійти</Button>
			</Link>
		</div>
	)
}

export { AuthBtnRegister }
