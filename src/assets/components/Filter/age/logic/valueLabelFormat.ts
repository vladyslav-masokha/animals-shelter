<<<<<<< HEAD
const valueLabelFormat = (value: number) => {
	if (value % 10 === 1 && value !== 11) return `${value} рік`

	if (
		(value % 10 === 2 && value !== 12) ||
		(value % 10 === 3 && value !== 13) ||
		(value % 10 === 4 && value !== 14)
	)
		return `${value} роки`

	return `${value} років`
}

export { valueLabelFormat }
=======
const valueLabelFormat = (value: number) => {
	if (value % 10 === 1 && value !== 11) return `${value} рік`

	if (
		(value % 10 === 2 && value !== 12) ||
		(value % 10 === 3 && value !== 13) ||
		(value % 10 === 4 && value !== 14)
	)
		return `${value} роки`

	return `${value} років`
}

export { valueLabelFormat }
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
