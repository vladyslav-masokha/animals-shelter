import { AuthErrorCodes } from 'firebase/auth'

const RegisterErrorMessages = (
	setErrorMessage: (errorMessage: string | null) => void,
	errorCode: string,
	errorMessage: string
) => {
	setErrorMessage(
		errorCode === AuthErrorCodes.INVALID_EMAIL
			? 'Невірна адреса електронної пошти!'
			: errorCode === 'auth/missing-password'
			? 'Введіть пароль!'
			: errorCode === AuthErrorCodes.WEAK_PASSWORD ||
      errorCode === 'auth/weak-password'
      ? 'Слабкий пароль. Виберіть більш надійний пароль!'
			: errorCode === AuthErrorCodes.EMAIL_EXISTS
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

