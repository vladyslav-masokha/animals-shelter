import { Header } from '../../ui/Header/Header'
import Footer from '../../ui/footer/Footer'
import { useTitleLogic } from '../globalLogic/titleLogic'
import styles from './DonationPage.module.scss'

const DonationPage = () => {
	useTitleLogic({ namePage: 'Донорство', id: null })

	return (
		<>
			<Header />

			<div className={styles.donation}>
				<div className='wrapper'>
					<h2>В розробці!</h2>
				</div>
			</div>

			<Footer />
		</>
	)
}

export { DonationPage }
