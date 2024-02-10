import { userNamePattern } from '../patterns/UserNamePattern'

const handleUserNameBlur = (
	userName: string,
	setIsUserNameValid: (email: boolean) => void
) => {
	return setIsUserNameValid(userNamePattern.test(userName))
}

export { handleUserNameBlur }
