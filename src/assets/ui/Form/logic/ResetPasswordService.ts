import { AuthError, getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { ResetErrorMessages } from '../errorMessages/ResetErrorMessage'

type SetState<T> = (state: T) => void

const handleResetPassword = (
	email: string,
	setSuccessMessage: SetState<string | null>,
	setErrorMessage: SetState<string | null>
) => {
	const auth = getAuth()

	sendPasswordResetEmail(auth, email)
		.then(() => {
			setSuccessMessage(`Електронний лист надіслано успішно на ${email}.`)
			setErrorMessage('')
		})
		.catch((error: AuthError) => {
			const { code, message } = error
			ResetErrorMessages(setErrorMessage, code, message)
		})
}

export { handleResetPassword }
