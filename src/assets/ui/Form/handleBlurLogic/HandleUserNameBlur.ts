<<<<<<< HEAD
import { userNamePattern } from '../patterns/UserNamePattern'

const handleUserNameBlur = (
	userName: string,
	setIsUserNameValid: (email: boolean) => void
) => {
	return setIsUserNameValid(userNamePattern.test(userName))
}

export { handleUserNameBlur }
=======
import { userNamePattern } from '../patterns/UserNamePattern'

const handleUserNameBlur = (
	userName: string,
	setIsUserNameValid: (email: boolean) => void
) => {
	return setIsUserNameValid(userNamePattern.test(userName))
}

export { handleUserNameBlur }
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
