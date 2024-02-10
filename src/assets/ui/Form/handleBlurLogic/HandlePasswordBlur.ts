import { passwordPattern } from '../patterns/PasswordPattern'

const handlePasswordBlur = (
	password: string,
	setIsPasswordValid: (email: boolean) => void
) => {
	return setIsPasswordValid(passwordPattern.test(password))
}

export { handlePasswordBlur }
