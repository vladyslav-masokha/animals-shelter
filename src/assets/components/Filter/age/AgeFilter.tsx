import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { valueLabelFormatAge } from '../../../globalLogic/valueLabelFormatAge'
import styles from '../Filter.module.scss'
import { sliderStyle as Slider } from '../filterStyles/sliderStyle'

interface AgeProps {
	setAgeFilter: (ageRange: [number, number] | null) => void
	applyFilters: () => void
}

const AgeFilter: React.FC<AgeProps> = ({ setAgeFilter, applyFilters }) => {
	const [ageRange, setAgeRange] = useState<[number, number]>([1, 25])

	useEffect(() => applyFilters(), [ageRange, applyFilters])

	const handleAgeChange = (_event: Event, newValue: number | number[]) => {
		if (Array.isArray(newValue)) setAgeRange([newValue[0], newValue[1]])
		else setAgeRange([0, newValue])
	}

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		inputType: 'min' | 'max'
	) => {
		const value = +event.target.value
		if (inputType === 'min') setAgeRange([value, ageRange[1]])
		else setAgeRange([ageRange[0], value])
	}

	return (
		<div className={styles.filterAge}>
			<h3>Вік</h3>

			<Slider
				value={ageRange}
				onChange={handleAgeChange}
				onChangeCommitted={() => setAgeFilter(ageRange)}
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
