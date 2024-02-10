import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<div className={styles.headerLogo}>
			<Link to='/' className={styles.logo}>
				SaveTheAnimals
			</Link>
			<span className={styles.subLogo}>Притулок для тварин</span>
		</div>
	)
}

export { Logo }
