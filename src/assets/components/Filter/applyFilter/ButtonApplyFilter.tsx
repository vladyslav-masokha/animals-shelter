import { Button } from '@mui/material'
import styles from '../Filter.module.scss'

interface ButtonApplyFilterProps {
	openFilterFunction: () => void
	applyFilters: () => void
}

const ButtonApplyFilter: React.FC<ButtonApplyFilterProps> = ({
	openFilterFunction,
	applyFilters,
}) => {
	const saveActions = () => {
		openFilterFunction()
		applyFilters()
	}

	return (
		<Button className={styles.btnApply} onClick={saveActions}>
			Прийняти зміни
		</Button>
	)
}

export { ButtonApplyFilter }
