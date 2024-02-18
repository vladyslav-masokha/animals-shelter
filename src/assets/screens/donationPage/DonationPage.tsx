import { Header } from '../../ui/Header/Header'
import { useTitleLogic } from '../globalLogic/titleLogic'
import styles from './DonationPage.module.scss'

const DonationPage = () => {
	useTitleLogic({ namePage: 'Донорство' })

	return (
		<>
			<Header />

			<div className={styles.donation}>
				<div className='wrapper'>
					<h2>В розробці!</h2>
				</div>
			</div>
		</>
	)
}

export { DonationPage }
