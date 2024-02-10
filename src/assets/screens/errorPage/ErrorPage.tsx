import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './ErrorPage.module.scss'

const ErrorPage = () => {
	useEffect(() => {
		document.title = 'Сторінку не знайдено!'

		return () => {
			document.title = 'Головна - Притулок для тварин'
		}
	}, [])

	return (
		<div className={styles.errorPage}>
			<div className='wrapper'>
				<h1 className={styles.errorMessage}>
					<p className={styles.errorCode}>404</p>
					Сторінку не знайдено!
				</h1>
				<Link to='/' className={styles.homeLink}>
					{'>'} Головна {'<'}
				</Link>
			</div>
		</div>
	)
}

export { ErrorPage }
