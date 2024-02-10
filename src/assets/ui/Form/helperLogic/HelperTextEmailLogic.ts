const helperTextEmailLogic = (isEmailValid: boolean) => {
	return !isEmailValid ? 'Невірний формат електронної пошти' : ''
}

export { helperTextEmailLogic }
