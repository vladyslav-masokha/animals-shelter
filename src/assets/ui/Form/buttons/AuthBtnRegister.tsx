import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

interface AuthButtonProps {
	handleRegisterClick: () => void
	isEmailValid: boolean
	isPasswordValid: boolean
}

const AuthBtnRegister: React.FC<AuthButtonProps> = ({
	handleRegisterClick,
	isEmailValid,
	isPasswordValid,
}) => {
	return (
		<div>
			<Button
				variant='text'
				onClick={handleRegisterClick}
				disabled={!isEmailValid || !isPasswordValid}
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
