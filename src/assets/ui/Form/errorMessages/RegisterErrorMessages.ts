import { AuthErrorCodes } from 'firebase/auth'

const RegisterErrorMessages = (
	setErrorMessage: (errorMessage: string | null) => void,
	errorCode: string,
	errorMessage: string
) => {
	console.log(AuthErrorCodes)

	setErrorMessage(
		errorCode === AuthErrorCodes.EMAIL_EXISTS
			? 'Вибачте, цей електронний адрес вже використовується. Будь ласка, використайте інший!'
			: errorCode === AuthErrorCodes.POPUP_CLOSED_BY_USER ||
			errorCode === 'auth/popup-closed-by-user'
			? 'Вікно авторизації закрито користувачем!'
			: errorCode === AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER ||
			errorCode === 'auth/too-many-requests'
			? 'Доступ до цього акаунта тимчасово вимкнено через численні невдалі спроби входу. Ви можете негайно відновити його, скинувши пароль, або спробувати пізніше!'
			: errorMessage
	)
}

export { RegisterErrorMessages }

