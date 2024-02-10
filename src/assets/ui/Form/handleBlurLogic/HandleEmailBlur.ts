import { emailPattern } from '../patterns/EmailPattern'

const handleEmailBlur = (
	email: string,
	setIsEmailValid: (email: boolean) => void
) => {
	return setIsEmailValid(emailPattern.test(email))
}

export { handleEmailBlur }
