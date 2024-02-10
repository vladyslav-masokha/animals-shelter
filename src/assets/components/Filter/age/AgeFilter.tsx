import { Slider } from '@mui/material'
import { useState } from 'react'
import styles from './AgeFilter.module.scss'
import { FilterAgeInputs } from './FilterAgeInputs'
import { AgeInputChange } from './logic/AgeInputChange'
import { valueLabelFormat } from './logic/valueLabelFormat'

interface AgeFilterProps {
	setAgeFilter: (age: number) => void
	applyFilters: () => void
}

const AgeFilter: React.FC<AgeFilterProps> = ({
	setAgeFilter,
	applyFilters,
}) => {
	const [ageRange, setAgeRange] = useState<[number, number]>([0, 25])
	setAgeFilter(2)

	// const handleAgeChange = (_event: Event, newValue: number | number[]) => {
	// 	// setMinAge(Array.isArray(newValue) ? newValue[0] : '')
	// 	// setMaxAge(Array.isArray(newValue) ? newValue[1] : '')

	// 	applyFilters()
	// }

	return (
		<div className={styles.filterAge}>
			<h3>Вік</h3>

			<Slider
				value={ageRange}
				onChange={applyFilters}
				color='primary'
				valueLabelDisplay='auto'
				valueLabelFormat={valueLabelFormat}
				min={1}
				max={25}
			/>

			<FilterAgeInputs
				minAge={0}
				maxAge={25}
				AgeInputChange={(event, inputType) =>
					AgeInputChange(event, 0, 25, setAgeRange, inputType)
				}
			/>
		</div>
	)
}

export { AgeFilter }
