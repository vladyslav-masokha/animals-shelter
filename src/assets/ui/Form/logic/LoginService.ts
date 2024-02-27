import { AuthError, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { LoginErrorMessages } from '../errorMessages/LoginErrorMessage'

type SetState<T> = (state: T) => void

const handleLogin = (
	email: string,
	password: string,
	setEmail: SetState<string>,
	setPassword: SetState<string>,
	setSuccessMessage: SetState<string | null>,
	setErrorMessage: SetState<string | null>
) => {
	const auth = getAuth()

	signInWithEmailAndPassword(auth, email, password)
		.then(() => {
			setSuccessMessage('Авторизація пройшла успішно!')

			setEmail('')
			setPassword('')
			setErrorMessage('')
		})
		.catch((error: AuthError) => {
			const { code, message } = error
			LoginErrorMessages(setErrorMessage, code, message)
		})
}

export { handleLogin }
