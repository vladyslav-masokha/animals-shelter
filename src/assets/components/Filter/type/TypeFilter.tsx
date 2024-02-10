import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import styles from './TypeFilter.module.scss'

interface TypeFilterProps {
	setTypeFilter: Dispatch<SetStateAction<string | null>>
	applyFilters: () => void
}

const TypeFilter: React.FC<TypeFilterProps> = ({ applyFilters }) => {
	// const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	const gender = event.target.value
	// 	// setSelectedGender(gender)

	// 	applyFilters()
	// }

	return (
		<div className={styles.type}>
			<h3>Тип</h3>
			<FormControl>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					value={''}
					onChange={applyFilters}
					name='radio-buttons-group'
				>
					<FormControlLabel value='Собака' control={<Radio />} label='Собака' />
					<FormControlLabel value='Кіт' control={<Radio />} label='Кіт' />
					<FormControlLabel value='Кролик' control={<Radio />} label='Кролик' />
					<FormControlLabel value='' control={<Radio />} label='Усі' />
				</RadioGroup>
			</FormControl>
		</div>
	)
}

export { TypeFilter }
