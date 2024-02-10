import { Link, useLocation } from 'react-router-dom'
import styles from './Navigation.module.scss'

interface NavLinkProps {
	page: string
	path: string
}

const NavLink: React.FC<NavLinkProps> = ({ page, path }) => {
	const location = useLocation()
	return (
		<Link
			to={path}
			className={`${styles.navLink} ${
				location.pathname === path ? `${styles.active}` : ''
			}`}
		>
			{page}
		</Link>
	)
}

export { NavLink }
