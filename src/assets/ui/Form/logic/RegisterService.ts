import {
	AuthError,
	createUserWithEmailAndPassword,
	getAuth,
	updateProfile,
} from 'firebase/auth'
import { RegisterErrorMessages } from '../errorMessages/RegisterErrorMessages'

type SetState<T> = (state: T) => void

const handleRegister = (
	userName: string,
	email: string,
	password: string,
	setUserName: SetState<string>,
	setEmail: SetState<string>,
	setPassword: SetState<string>,
	setSuccessMessage: SetState<string | null>,
	setErrorMessage: SetState<string | null>
) => {
	const auth = getAuth()
	if (!userName.trim()) {
		setErrorMessage("Невірне ім'я користувача!")
		return
	}

	createUserWithEmailAndPassword(auth, email, password)
		.then(async userCredential => {
			const user = userCredential.user
			await updateProfile(user, { displayName: userName })
			setSuccessMessage('Реєстрація успішна!')

			setUserName('')
			setEmail('')
			setPassword('')
			setErrorMessage('')
		})
		.catch((error: AuthError) => {
			const { code, message } = error
			RegisterErrorMessages(setErrorMessage, code, message)
		})
}

export { handleRegister }
