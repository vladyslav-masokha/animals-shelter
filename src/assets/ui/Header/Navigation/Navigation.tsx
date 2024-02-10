import { User, getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { NavLink } from './NavLink.tsx'
import styles from './Navigation.module.scss'
import { UserActions } from './UserActions.tsx'

const Navigation = () => {
	const [open, setOpen] = useState(false)
	const [user, setUser] = useState<User | null>(null)

	const openNavigation = () => setOpen(!open)

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [open])

	useEffect(() => {
		const auth = getAuth()

		const unsubscribe = onAuthStateChanged(auth, authUser =>
			authUser ? setUser(authUser) : setUser(null)
		)

		return () => unsubscribe()
	}, [])

	const handleLogout = async () => {
		const auth = getAuth()

		await signOut(auth)
		setUser(null)
	}

	return (
		<>
			<nav className={styles.nav} role='navigation'>
				<ul className={open ? `${styles.visible}` : ''}>
					<NavLink page='Головна' path='/' />
					<NavLink page='Донорство' path='/donation' />
					<NavLink page='Про Нас' path='/about' />

					<UserActions user={user} handleLogout={handleLogout} />
				</ul>
			</nav>

			<button
				type='button'
				className={
					open ? `${styles.burgerNav} ${styles.open}` : `${styles.burgerNav}`
				}
				onClick={openNavigation}
			>
				<span className={styles.burgerLine}></span>
			</button>

			<UserActions user={user} handleLogout={handleLogout} />
		</>
	)
}

export { Navigation }
