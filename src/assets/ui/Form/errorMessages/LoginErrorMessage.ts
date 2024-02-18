import { AuthErrorCodes } from 'firebase/auth'

const LoginErrorMessages = (
	setErrorMessage: (errorMessage: string | null) => void,
	errorCode: string,
	errorMessage: string
) => {
	setErrorMessage(
		errorCode === AuthErrorCodes.INVALID_EMAIL
			? 'Невірна адреса електронної пошти!'
			: errorCode === AuthErrorCodes.INVALID_PASSWORD ||
			errorCode === 'auth/wrong-password'
			? 'Невірний пароль!'
			: errorCode === 'auth/missing-password'
			? 'Введіть пароль!'
			: errorCode === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS
			? 'Невірна адреса електронної пошти або пароль!'
			: errorCode === AuthErrorCodes.USER_DELETED
			? 'Користувача не знайдено!'
			: errorCode === AuthErrorCodes.POPUP_CLOSED_BY_USER ||
      errorCode === 'auth/popup-closed-by-user'
      ? 'Вікно авторизації закрито користувачем!'
			: errorCode === AuthErrorCodes.USER_DISABLED ||
      errorCode === 'auth/user-disabled'
      ? 'Акаунт вимкнено адміністратором. Зверніться до служби підтримки!'
			: errorCode === AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER ||
      errorCode === 'auth/too-many-requests'
      ? 'Доступ до цього акаунта тимчасово вимкнено через численні невдалі спроби входу. Ви можете негайно відновити його, скинувши пароль, або спробувати пізніше!'
			: errorMessage
	)
}

export { LoginErrorMessages }
