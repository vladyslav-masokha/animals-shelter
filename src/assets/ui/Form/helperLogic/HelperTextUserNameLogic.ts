const helperTextUserNameLogic = (isUserNameValid: boolean) => {
	return !isUserNameValid ? 'Невірний формат імені' : ''
}

export { helperTextUserNameLogic }
