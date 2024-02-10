<<<<<<< HEAD
import { passwordPattern } from '../patterns/PasswordPattern'

const handlePasswordBlur = (
	password: string,
	setIsPasswordValid: (email: boolean) => void
) => {
	return setIsPasswordValid(passwordPattern.test(password))
}

export { handlePasswordBlur }
=======
import { passwordPattern } from '../patterns/PasswordPattern'

const handlePasswordBlur = (
	password: string,
	setIsPasswordValid: (email: boolean) => void
) => {
	return setIsPasswordValid(passwordPattern.test(password))
}

export { handlePasswordBlur }
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
