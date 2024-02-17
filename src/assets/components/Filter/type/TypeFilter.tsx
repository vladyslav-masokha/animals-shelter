import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { radioStyles } from '../radioStyles'
import styles from './TypeFilter.module.scss'

interface TypeFilterProps {
	setTypeFilter: (typeFilter: string | null) => void
	applyFilters: () => void
}

const TypeFilter: React.FC<TypeFilterProps> = ({
	setTypeFilter,
	applyFilters,
}) => {
	const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTypeFilter(event.target.value === '' ? null : event.target.value)
		applyFilters()
	}

	return (
		<div className={styles.type}>
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
