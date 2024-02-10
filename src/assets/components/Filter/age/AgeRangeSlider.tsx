import { Slider } from '@mui/material'
import { Dispatch, SetStateAction, useState } from 'react'
import { Animal } from '../../IAnimal'
import styles from './AgeFilter.module.scss'
import { FilterAgeInputs } from './FilterAgeInputs'
import { AgeInputChange } from './logic/AgeInputChange'
import { valueLabelFormat } from './logic/valueLabelFormat'

interface AgeRangeSliderProps {
	minAge: number | ''
	maxAge: number | ''
	setMinAge: (value: number | '') => void
	setMaxAge: (value: number | '') => void
	animals: Animal[]
	setFilteredAnimals: Dispatch<SetStateAction<Animal[]>>
}

const AgeRangeSlider: React.FC<AgeRangeSliderProps> = ({
	minAge,
	maxAge,
	setMinAge,
	setMaxAge,
	animals,
	setFilteredAnimals,
}) => {
	const [ageRange, setAgeRange] = useState<[number, number]>([0, 25])

	const handleSliderChange = (_event: Event, newValue: number | number[]) => {
		if (Array.isArray(newValue)) {
			setAgeRange(newValue as [number, number])
			setMinAge(newValue[0])
			setMaxAge(newValue[1])

			const filteredResults = animals.filter(
				animal => animal.age >= newValue[0] && animal.age <= newValue[1]
			)

			setFilteredAnimals(filteredResults)
		}
	}

	return (
		<div className={styles.filterAge}>
			<h3>Вік</h3>

			<Slider
				value={ageRange}
				onChange={handleSliderChange}
				color='secondary'
				valueLabelDisplay='auto'
				valueLabelFormat={valueLabelFormat}
				min={1}
				max={25}
			/>

			<FilterAgeInputs
				minAge={minAge}
				maxAge={maxAge}
				AgeInputChange={(event, inputType) =>
					AgeInputChange(
						event,
						minAge,
						maxAge,
						setAgeRange,
						inputType
					)
				}
			/>
		</div>
	)
}

export { AgeRangeSlider }
