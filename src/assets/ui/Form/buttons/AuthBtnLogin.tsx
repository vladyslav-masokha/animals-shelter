<<<<<<< HEAD
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

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
		<div>
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
=======
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

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
		<div>
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
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
