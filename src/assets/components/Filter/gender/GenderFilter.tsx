import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import styles from './GenderFilter.module.scss'

interface GenderFilterProps {
	setGenderFilter: (genderFilter: string | null) => void
	applyFilters: () => void
}

const GenderFilter: React.FC<GenderFilterProps> = ({
	setGenderFilter,
	applyFilters,
}) => {
	const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGenderFilter(event.target.value === '' ? null : event.target.value)
		applyFilters()
	}

	return (
		<div className={styles.gender}>
			<h3>Стать</h3>
			<FormControl>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					defaultValue=''
					onChange={handleGenderChange}
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
