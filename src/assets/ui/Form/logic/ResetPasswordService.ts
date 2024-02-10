import { AuthErrorCodes, getAuth, sendPasswordResetEmail } from 'firebase/auth'

const handleResetPassword = (
	email: string,
	setErrorMessage: (errorMessage: string | null) => void
) => {
	const auth = getAuth()
	sendPasswordResetEmail(auth, email)
		.then(() => {
			console.log(email)
		})
		.catch(error => {
			const errorCode = error.code
			const errorMessage = error.message

			console.log(AuthErrorCodes)

			setErrorMessage(
				errorCode === AuthErrorCodes.CREDENTIAL_ALREADY_IN_USE
					? 'Адреса електронної пошти вже використовується.'
					: errorCode === AuthErrorCodes.INVALID_EMAIL
					? 'Невірна адреса електронної пошти.'
					: errorCode === AuthErrorCodes.POPUP_BLOCKED
					? 'Вікно авторизації заблоковано.'
					: errorCode === AuthErrorCodes.NETWORK_REQUEST_FAILED
					? 'Помилка мережі. Спробуйте пізніше.'
					: errorCode === 'auth/missing-email'
					? 'Введіть пошту.'
					: errorCode === 'auth/missing-password'
					? 'Введіть пароль.'
					: errorCode === AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER
					? 'Доступ до цього акаунта тимчасово вимкнено через численні невдалі спроби входу. Ви можете негайно відновити його, скинувши пароль, або спробувати пізніше.'
					: errorMessage
			)
		})
}

export { handleResetPassword }
