import { Header } from '../../ui/Header/Header'
import { useTitleLogic } from '../globalLogic/titleLogic'
import styles from './AnimalPage.module.scss'

const AnimalPage = () => {
	useTitleLogic({ namePage: 'Боб (test name)' })

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

export { AnimalPage }
