import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import styles from './SizeFilter.module.scss'

interface SizeFilterProps {
	setSizeFilter: (sizeFilter: string | null) => void
	applyFilters: () => void
}

const SizeFilter: React.FC<SizeFilterProps> = ({
	setSizeFilter,
	applyFilters,
}) => {
	const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSizeFilter(event.target.value === '' ? null : event.target.value)
		applyFilters()
	}

	return (
		<div className={styles.size}>
			<h3>Розмір</h3>
			<FormControl>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					defaultValue=''
					onChange={handleSizeChange}
					name='radio-buttons-group'
				>
					<FormControlLabel
						value='Маленький'
						control={<Radio />}
						label='Маленький'
					/>
					<FormControlLabel
						value='Середній'
						control={<Radio />}
						label='Середній'
					/>
					<FormControlLabel
						value='Великий'
						control={<Radio />}
						label='Великий'
					/>
					<FormControlLabel value='' control={<Radio />} label='Усі' />
				</RadioGroup>
			</FormControl>
		</div>
	)
}

export { SizeFilter }
