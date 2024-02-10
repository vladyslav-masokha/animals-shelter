import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import styles from './GenderFilter.module.scss'

interface GenderFilterProps {
	setGenderFilter: Dispatch<SetStateAction<string | null>>
	applyFilters: () => void
}

const GenderFilter: React.FC<GenderFilterProps> = ({ applyFilters }) => {
	// const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	const gender = event.target.value
	// 	// setSelectedGender(gender)

	// 	applyFilters()
	// }

	return (
		<div className={styles.gender}>
			<h3>Стать</h3>
			<FormControl>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					value={''}
					onChange={applyFilters}
					name='radio-buttons-group'
				>
					<FormControlLabel value='Жіноча' control={<Radio />} label='Жіноча' />
					<FormControlLabel
						value='Чоловіча'
						control={<Radio />}
						label='Чоловіча'
					/>
					<FormControlLabel value='' control={<Radio />} label='Усі' />
				</RadioGroup>
			</FormControl>
		</div>
	)
}

export { GenderFilter }
