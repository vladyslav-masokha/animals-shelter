import styles from './Header.module.scss'
import { Logo } from './logo/Logo'
import { Navigation } from './Navigation/Navigation'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='wrapper'>
				<div className={styles.headerBody}>
					<Logo />
					<Navigation />
				</div>
			</div>
		</header>
	)
}

export { Header }
