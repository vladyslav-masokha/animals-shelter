import { Header } from '../../ui/Header/Header'
import styles from './AboutPage.module.scss'

const AboutPage = () => {
	return (
		<>
			<Header />

			<div className={styles.about}>
				<div className='wrapper'>
					<h2>В розробці!</h2>
				</div>
			</div>
		</>
	)
}

export { AboutPage }
