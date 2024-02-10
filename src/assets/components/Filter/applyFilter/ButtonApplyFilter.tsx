<<<<<<< HEAD
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
=======
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
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
