<<<<<<< HEAD
import { emailPattern } from '../patterns/EmailPattern'

const handleEmailBlur = (
	email: string,
	setIsEmailValid: (email: boolean) => void
) => {
	return setIsEmailValid(emailPattern.test(email))
}

export { handleEmailBlur }
=======
import { emailPattern } from '../patterns/EmailPattern'

const handleEmailBlur = (
	email: string,
	setIsEmailValid: (email: boolean) => void
) => {
	return setIsEmailValid(emailPattern.test(email))
}

export { handleEmailBlur }
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
