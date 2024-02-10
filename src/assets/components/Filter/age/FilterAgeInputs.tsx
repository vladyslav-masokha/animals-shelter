import { TextField } from '@mui/material'
import { ChangeEvent } from 'react'
import styles from './AgeFilter.module.scss'

interface filterAgeInputs {
	minAge: number | ''
	maxAge: number | ''
	AgeInputChange: (
		event: ChangeEvent<HTMLInputElement>,
		inputType: 'min' | 'max'
	) => void
}

const FilterAgeInputs: React.FC<filterAgeInputs> = ({
	minAge,
	maxAge,
	AgeInputChange,
}) => {
	return (
		<div className={styles.filterAgeInputs}>
			<TextField
				placeholder='1'
				value={minAge}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					AgeInputChange(e, 'min')
				}
				type='number'
				InputProps={{ inputProps: { min: 0, max: maxAge } }}
			/>
			<TextField
				placeholder='25'
				value={maxAge}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					AgeInputChange(e, 'max')
				}
				type='number'
				InputProps={{ inputProps: { min: minAge, max: 25 } }}
			/>
		</div>
	)
}

export { FilterAgeInputs }
