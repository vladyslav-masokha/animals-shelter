import { AuthErrorCodes } from 'firebase/auth'

const LoginErrorMessages = (
	setErrorMessage: (errorMessage: string | null) => void,
	errorCode: string, 
	errorMessage: string
) => {
	setErrorMessage(
		errorCode === AuthErrorCodes.INVALID_EMAIL
			? 'Невірна адреса електронної пошти.'
			: errorCode === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS ||
			errorCode === AuthErrorCodes.USER_DELETED
			? 'Користувача не знайдено.'
			: errorCode === AuthErrorCodes.INVALID_PASSWORD ||
			errorCode === 'auth/wrong-password'
			? 'Неправильний пароль. Будь ласка, спробуйте ще раз.'
			: errorCode === AuthErrorCodes.EMAIL_EXISTS ||
			errorCode === 'auth/email-already-in-use'
			? 'Електронна адреса вже використовується. Виберіть іншу адресу або використовуйте інший метод входу.'
			: errorCode === AuthErrorCodes.POPUP_CLOSED_BY_USER ||
			errorCode === 'auth/popup-closed-by-user'
			? 'Вікно авторизації закрито користувачем.'
			: errorCode === AuthErrorCodes.WEAK_PASSWORD ||
			errorCode === 'auth/weak-password'
			? 'Слабкий пароль. Виберіть більш надійний пароль.'
			: errorCode === AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER ||
			errorCode === 'auth/too-many-requests'
			? 'Доступ до цього акаунта тимчасово вимкнено через численні невдалі спроби входу. Ви можете негайно відновити його, скинувши пароль, або спробувати пізніше.'
			: errorCode === AuthErrorCodes.USER_DISABLED ||
			errorCode === 'auth/user-disabled'
			? 'Акаунт вимкнено адміністратором. Зверніться до служби підтримки.'
			: errorCode === 'auth/app-not-authorized'
			? 'Додаток не авторизований для використання Firebase Authentication.'
			: errorCode === 'auth/app-not-installed'
			? 'Додаток не встановлено або неправильно налаштовано для Firebase Authentication.'
			: errorMessage
	)
}

export { LoginErrorMessages }

