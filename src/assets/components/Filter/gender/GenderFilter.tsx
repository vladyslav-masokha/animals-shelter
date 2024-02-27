import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import styles from '../Filter.module.scss'
import { radioStyles } from '../filterStyles/radioStyles'

interface GenderProps {
	setGenderFilter: (genderFilter: string | null) => void
	applyFilters: () => void
}

const GenderFilter: React.FC<GenderProps> = ({
	setGenderFilter,
	applyFilters,
}) => {
	const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGenderFilter(event.target.value === '' ? null : event.target.value)
		applyFilters()
	}

	return (
		<div className={styles.filterGender}>
			<h3>Стать</h3>

			<FormControl>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					defaultValue=''
					onChange={handleGenderChange}
					name='radio-buttons-group'
				>
					<FormControlLabel
						value='Жіноча'
						control={<Radio sx={radioStyles} />}
						label='Жіноча'
					/>
					<FormControlLabel
						value='Чоловіча'
						control={<Radio sx={radioStyles} />}
						label='Чоловіча'
					/>
					<FormControlLabel
						value=''
						control={<Radio sx={radioStyles} />}
						label='Усі'
					/>
				</RadioGroup>
			</FormControl>
		</div>
	)
}

export { GenderFilter }
