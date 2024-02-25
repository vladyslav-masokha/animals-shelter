const valueLabelFormatWeight = (value: number) => {
	if (value % 10 === 1 && value !== 11) return `${value} кг`

	if (
		(value % 10 === 2 && value !== 12) ||
		(value % 10 === 3 && value !== 13) ||
		(value % 10 === 4 && value !== 14)
	)
		return `${value} кг`

	return `${value} кг`
}

export { valueLabelFormatWeight }
