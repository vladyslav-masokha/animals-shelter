<<<<<<< HEAD
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { RegisterLink } from './RegisterLink'
import { LoginLink } from './LoginLink'
import styles from './Navigation.module.scss'

interface User {
	displayName?: string | null
	email: string | null
}

interface UserActionsProps {
	user: User | null
	handleLogout: () => void
}

const UserActions: React.FC<UserActionsProps> = ({ user, handleLogout }) => {
	return (
		<div className={styles.userAction}>
			{user ? (
				<>
					<Link to='/profile' className={styles.userAccount}>
						{user.displayName || user.email}
					</Link>
					<Button variant='text' onClick={handleLogout}>
						Вийти
					</Button>
				</>
			) : (
				<>
					<LoginLink />
					<RegisterLink />
				</>
			)}
		</div>
	)
}

export { UserActions }
=======
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { RegisterLink } from './RegisterLink'
import { LoginLink } from './LoginLink'
import styles from './Navigation.module.scss'

interface User {
	displayName?: string | null
	email: string | null
}

interface UserActionsProps {
	user: User | null
	handleLogout: () => void
}

const UserActions: React.FC<UserActionsProps> = ({ user, handleLogout }) => {
	return (
		<div className={styles.userAction}>
			{user ? (
				<>
					<Link to='/profile' className={styles.userAccount}>
						{user.displayName || user.email}
					</Link>
					<Button variant='text' onClick={handleLogout}>
						Вийти
					</Button>
				</>
			) : (
				<>
					<LoginLink />
					<RegisterLink />
				</>
			)}
		</div>
	)
}

export { UserActions }
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
