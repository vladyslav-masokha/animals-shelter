import { AuthErrorCodes } from 'firebase/auth'

const ResetErrorMessages = (
	setErrorMessage: (errorMessage: string | null) => void,
	errorCode: string,
	errorMessage: string
) => {
	setErrorMessage(
		errorCode === AuthErrorCodes.INVALID_EMAIL
			? 'Невірна адреса електронної пошти!'
			: errorCode === 'auth/missing-email'
			? 'Введіть пошту!'
			: errorCode === 'auth/network-request-failed'
			? 'Не вдалося виконати мережевий запит.'
			: errorMessage
	)
}

export { ResetErrorMessages }
