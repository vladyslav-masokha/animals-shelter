import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import styles from './SizeFilter.module.scss'

interface SizeFilterProps {
	setSizeFilter: Dispatch<SetStateAction<string | null>>
	applyFilters: () => void
}

const SizeFilter: React.FC<SizeFilterProps> = ({ applyFilters }) => {
	// const [size, setSize] = useState('')

	// const handleChange = (event: SelectChangeEvent) => {
	// 	setSize(event.target.value)
	// }

	return (
		<div className={styles.size}>
			<h3>Розмір</h3>
			<FormControl>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					value={''}
					onChange={applyFilters}
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
