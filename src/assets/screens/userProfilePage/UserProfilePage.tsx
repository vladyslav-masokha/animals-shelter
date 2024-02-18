import { Header } from '../../ui/Header/Header'
import { useTitleLogic } from '../globalLogic/titleLogic'
import styles from './UserProfile.module.scss'

const UserProfilePage = () => {
	useTitleLogic({ namePage: 'Профіль', id: null })

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

export { UserProfilePage }
