import { TextField } from '@mui/material'
import { useState } from 'react'
import styles from '../Filter.module.scss'
import { sliderStyle as Slider } from '../filterStyles/sliderStyle'
import { valueLabelFormatAge } from './logic/valueLabelFormatAge'

interface AgeFilterProps {
	setAgeFilter: (ageRange: [number, number] | null) => void
	applyFilters: () => void
}

const AgeFilter: React.FC<AgeFilterProps> = ({
	setAgeFilter,
	applyFilters,
}) => {
	const [ageRange, setAgeRange] = useState<[number, number]>([1, 25])

	const handleApplyFilters = () => {
		setAgeFilter(ageRange)
		applyFilters()
	}

	const handleAgeChange = (_event: Event, newValue: number | number[]) => {
		if (Array.isArray(newValue)) setAgeRange([newValue[0], newValue[1]])
		else setAgeRange([0, newValue])
		handleApplyFilters()
	}

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		inputType: 'min' | 'max'
	) => {
		const value = parseInt(event.target.value)
		if (inputType === 'min') setAgeRange([value, ageRange[1]])
		else setAgeRange([ageRange[0], value])
	}

	return (
		<div className={styles.filterAge}>
			<h3>Вік</h3>

			<Slider
				value={ageRange}
				onChange={handleAgeChange}
				onChangeCommitted={handleApplyFilters}
				color='secondary'
				valueLabelDisplay='auto'
				valueLabelFormat={valueLabelFormatAge}
				min={1}
				max={25}
			/>

			<div className={styles.filterAgeInputs}>
				<TextField
					placeholder='1'
					value={ageRange[0]}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleInputChange(e, 'min')
					}
					type='number'
					InputProps={{ inputProps: { min: 1, max: ageRange[1] } }}
				/>
				<TextField
					placeholder='25'
					value={ageRange[1]}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleInputChange(e, 'max')
					}
					type='number'
					InputProps={{ inputProps: { min: ageRange[0], max: 25 } }}
				/>
			</div>
		</div>
	)
}

export { AgeFilter }
