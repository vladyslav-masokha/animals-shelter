import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from '../Form.module.scss'

interface ButtonRegisterProps {
	handleRegisterClick: () => void
	isUserNameValid: boolean
	isEmailValid: boolean
	isPasswordValid: boolean
}

const AuthBtnRegister: React.FC<ButtonRegisterProps> = ({
	handleRegisterClick,
	isUserNameValid,
	isEmailValid,
	isPasswordValid,
}) => {
	const regBtnLogic = !isUserNameValid || !isEmailValid || !isPasswordValid

	return (
		<div className={styles.regBtns}>
			<Button
				variant='text'
				onClick={handleRegisterClick}
				disabled={regBtnLogic}
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
