import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import styles from '../Filter.module.scss'
import { radioStyles } from '../filterStyles/radioStyles'

interface TypeProps {
	setTypeFilter: (typeFilter: string | null) => void
	applyFilters: () => void
}

const TypeFilter: React.FC<TypeProps> = ({ setTypeFilter, applyFilters }) => {
	const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTypeFilter(event.target.value === '' ? null : event.target.value)
		applyFilters()
	}

	return (
		<div className={styles.filterType}>
			<h3>Тип</h3>

			<FormControl>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					defaultValue=''
					onChange={handleTypeChange}
					name='radio-buttons-group'
				>
					<FormControlLabel
						value='Собака'
						control={<Radio sx={radioStyles} />}
						label='Собака'
					/>
					<FormControlLabel
						value='Кіт'
						control={<Radio sx={radioStyles} />}
						label='Кіт'
					/>
					<FormControlLabel
						value='Кролик'
						control={<Radio sx={radioStyles} />}
						label='Кролик'
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

export { TypeFilter }
