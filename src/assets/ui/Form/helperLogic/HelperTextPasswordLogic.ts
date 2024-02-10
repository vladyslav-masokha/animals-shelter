const HelperTextPasswordLogic = (isPasswordValid: boolean) => {
	return !isPasswordValid
		? 'Пароль повинен містити принаймні 8 символів, включаючи цифри, маленькі та великі літери та спеціальні символи'
		: ''
}

export { HelperTextPasswordLogic }
