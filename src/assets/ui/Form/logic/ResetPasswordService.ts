import { AuthErrorCodes, getAuth, sendPasswordResetEmail } from 'firebase/auth'

const handleResetPassword = (
	email: string,
	setErrorMessage: (errorMessage: string | null) => void
) => {
	const auth = getAuth()
	sendPasswordResetEmail(auth, email)
		.then(() => {
			return { success: true, message: `Email sent to ${email} successfully.` }
		})
		.catch(error => {
			const errorCode = error.code
			const errorMessage = error.message

			console.log(AuthErrorCodes)

			setErrorMessage(
				errorCode === AuthErrorCodes.USER_DELETED ||
					errorCode === 'auth/user-not-found'
					? 'Користувач не знайдений!'
					: errorCode === AuthErrorCodes.NETWORK_REQUEST_FAILED
					? 'Помилка мережі. Спробуйте пізніше.'
					: errorCode === 'auth/missing-email'
					? 'Не вказана адреса електронної пошти.'
					: errorMessage
			)
		})
}

export { handleResetPassword }
