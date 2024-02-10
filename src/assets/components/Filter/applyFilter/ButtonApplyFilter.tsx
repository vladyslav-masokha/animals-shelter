import { Button } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import styles from '../Filter.module.scss'

interface ButtonApplyFilterProps {
	openFilterFunction: Dispatch<SetStateAction<void>>
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
