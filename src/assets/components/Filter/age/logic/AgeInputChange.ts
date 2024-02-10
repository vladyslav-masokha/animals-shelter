const AgeInputChange = (
	event: React.ChangeEvent<HTMLInputElement>,
	minAge: number | '',
	maxAge: number | '',
	// setMinAge: Dispatch<SetStateAction<number | ''>>,
	// setMaxAge: Dispatch<SetStateAction<number | ''>>,
	setAgeRange: (value: [number, number]) => void,
	inputType: 'min' | 'max'
) => {
	let inputValue = event.target.value.trim() === '' ? '' : +event.target.value

	inputValue = +inputValue
	minAge = +minAge
	maxAge = +maxAge

	if (inputType === 'min') {
		// setMinAge(inputValue)
		setAgeRange([inputValue, maxAge])
	} else {
		if (inputValue <= 25) {
			// setMaxAge(inputValue)
			setAgeRange([minAge, inputValue])
		}
	}
}

export { AgeInputChange }
