import {
	AuthErrorCodes,
	createUserWithEmailAndPassword,
	getAuth,
	updateProfile,
} from 'firebase/auth'

const handleRegister = (
	userName: string,
	email: string,
	password: string,
	setEmail: (email: string) => void,
	setPassword: (password: string) => void,
	setErrorMessage: (errorMessage: string | null) => void
) => {
	const auth = getAuth()

	createUserWithEmailAndPassword(auth, email, password)
		.then(async userCredential => {
			const user = userCredential.user
			await updateProfile(user, { displayName: userName })

			setEmail('')
			setPassword('')
			setErrorMessage('')
		})
		.catch(error => {
			const errorCode = error.code
			const errorMessage = error.message

			setErrorMessage(
				errorCode === AuthErrorCodes.CREDENTIAL_ALREADY_IN_USE
					? 'Адреса електронної пошти вже використовується.'
					: errorCode === AuthErrorCodes.INVALID_EMAIL
					? 'Невірна адреса електронної пошти.'
					: errorCode === AuthErrorCodes.POPUP_BLOCKED
					? 'Вікно авторизації заблоковано.'
					: errorCode === AuthErrorCodes.NETWORK_REQUEST_FAILED
					? 'Помилка мережі. Спробуйте пізніше.'
					: errorCode === 'auth/missing-password'
					? 'Невірний пароль.'
					: errorCode === AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER
					? 'Доступ до цього акаунта тимчасово вимкнено через численні невдалі спроби входу. Ви можете негайно відновити його, скинувши пароль, або спробувати пізніше.'
					: errorMessage
			)

			console.error('Не вдалося зареєструватися:', errorCode, errorMessage)
		})
}

export { handleRegister }
