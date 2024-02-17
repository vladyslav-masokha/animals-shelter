import { TextField } from '@mui/material'
import { useState } from 'react'
import { sliderStyle as Slider } from '../sliderStyle'
import styles from './WeightFilter.module.scss'
import { valueLabelFormat } from './logic/valueLabelFormat'

interface WeightFilterProps {
	setWeightFilter: (weightRange: [number, number] | null) => void
	applyFilters: () => void
}

const WeightFilter: React.FC<WeightFilterProps> = ({
	setWeightFilter,
	applyFilters,
}) => {
	const [weightRange, setWeightRange] = useState<[number, number]>([1, 12])

	const handleApplyFilters = () => {
		setWeightFilter(weightRange)
		applyFilters()
	}

	const handleWeightChange = (_event: Event, newValue: number | number[]) => {
		if (Array.isArray(newValue)) setWeightRange([newValue[0], newValue[1]])
		else setWeightRange([0, newValue])
		handleApplyFilters()
	}

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		inputType: 'min' | 'max'
	) => {
		const value = parseInt(event.target.value)
		if (inputType === 'min') setWeightRange([value, weightRange[1]])
		else setWeightRange([weightRange[0], value])
	}

	return (
		<div className={styles.filterAge}>
			<h3>Вага</h3>

			<Slider
				value={weightRange}
				onChange={handleWeightChange}
				onChangeCommitted={handleApplyFilters}
				color='primary'
				valueLabelDisplay='auto'
				valueLabelFormat={valueLabelFormat}
				min={1}
				max={12}
			/>

			<div className={styles.filterAgeInputs}>
				<TextField
					placeholder='1'
					value={weightRange[0]}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleInputChange(e, 'min')
					}
					type='number'
					InputProps={{ inputProps: { min: 1, max: weightRange[1] } }}
				/>
				<TextField
					placeholder='12'
					value={weightRange[1]}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleInputChange(e, 'max')
					}
					type='number'
					InputProps={{ inputProps: { min: weightRange[0], max: 12 } }}
				/>
			</div>
		</div>
	)
}

export { WeightFilter }
