import { TextField } from '@mui/material'
import { useState } from 'react'
import { valueLabelFormatWeight } from '../../logicLabelFormat/valueLabelFormatWeight'
import styles from '../Filter.module.scss'
import { sliderStyle as Slider } from '../filterStyles/sliderStyle'

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
		<div className={styles.filterWeight}>
			<h3>Вага</h3>

			<Slider
				value={weightRange}
				onChange={handleWeightChange}
				onChangeCommitted={handleApplyFilters}
				color='primary'
				valueLabelDisplay='auto'
				valueLabelFormat={valueLabelFormatWeight}
				min={1}
				max={12}
			/>

			<div className={styles.filterWeightInputs}>
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
