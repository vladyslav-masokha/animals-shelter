<<<<<<< HEAD
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
=======
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
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
