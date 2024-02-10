<<<<<<< HEAD
import { AuthErrorCodes, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { LoginErrorMessages } from '../errorMessages/LoginErrorMessage'

const handleLogin = (
	email: string,
	password: string,
	setEmail: (email: string) => void,
	setPassword: (password: string) => void,
	setErrorMessage: (errorMessage: string | null) => void
) => {
	const auth = getAuth()

	signInWithEmailAndPassword(auth, email, password)
		.then(() => {
			setEmail('')
			setPassword('')
			setErrorMessage('')
		})
		.catch(error => {
			const errorCode = error.code
			const errorMessage = error.message



			LoginErrorMessages(setErrorMessage, errorCode, errorMessage)

			console.error('Не вдалося авторизуватись:', errorCode, errorMessage)
			console.error(AuthErrorCodes.INVALID_LOGIN_CREDENTIALS);
			
		})
}

export { handleLogin }
=======
import { AuthErrorCodes, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { LoginErrorMessages } from '../errorMessages/LoginErrorMessage'

const handleLogin = (
	email: string,
	password: string,
	setEmail: (email: string) => void,
	setPassword: (password: string) => void,
	setErrorMessage: (errorMessage: string | null) => void
) => {
	const auth = getAuth()

	signInWithEmailAndPassword(auth, email, password)
		.then(() => {
			setEmail('')
			setPassword('')
			setErrorMessage('')
		})
		.catch(error => {
			const errorCode = error.code
			const errorMessage = error.message



			LoginErrorMessages(setErrorMessage, errorCode, errorMessage)

			console.error('Не вдалося авторизуватись:', errorCode, errorMessage)
			console.error(AuthErrorCodes.INVALID_LOGIN_CREDENTIALS);
			
		})
}

export { handleLogin }
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
