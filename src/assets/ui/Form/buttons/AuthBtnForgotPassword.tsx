import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from '../Form.module.scss'

const AuthBtnForgotPassword = () => {
	return (
		<Link to='/reset' className={styles.forgotBtn}>
			<Button variant='text'>Забули пароль</Button>
		</Link>
	)
}

export { AuthBtnForgotPassword }
