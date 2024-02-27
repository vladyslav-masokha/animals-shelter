import { Button } from '@mui/material'
import styles from '../Form.module.scss'

interface ResetProps {
	handleResetClick: () => void
}

const AuthBtnResetPassword: React.FC<ResetProps> = ({ handleResetClick }) => {
	return (
		<div className={styles.resetBtns}>
			<Button
				variant='text'
				className={styles.resetBtn}
				onClick={handleResetClick}
			>
				Скинути
			</Button>
		</div>
	)
}

export { AuthBtnResetPassword }
