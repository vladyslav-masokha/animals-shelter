import { useParams } from 'react-router-dom'
import { valueLabelFormatAge } from '../../components/filter/age/logic/valueLabelFormatAge'
import { valueLabelFormatWeight } from '../../components/filter/weight/logic/valueLabelFormatWeight'
import { Header } from '../../ui/Header/Header'
import { useFetchData } from '../../useFetchData'
import { useTitleLogic } from '../globalLogic/titleLogic'
import styles from './AnimalPage.module.scss'
import Footer from '../../ui/footer/Footer'

const AnimalPage = () => {
	const { id } = useParams<{ id: string }>()
	const animalsData = './animals.json'

	const data = useFetchData(animalsData)
	const animal = data.find(animal => animal.id === +id)

	useTitleLogic({ namePage: animal ? animal.name : '', id: +id })

	return (
		<>
			<Header />

			<div className={styles.animalPage}>
				<div className='wrapper'>
					{animal ? (
						<div className={styles.animal}>
							<img
								className={styles.cardImage}
								src={animal.image}
								alt={animal.name}
								loading='lazy'
							/>

							<div className={styles.animalInfo}>
								<h3 className={styles.name}>{animal.name}</h3>
								<p>Вік: {valueLabelFormatAge(animal.age)}</p>
								<p>Вага: {valueLabelFormatWeight(animal.weight)}</p>
								<p>Розмір: {animal.size}</p>
								<p>Стать: {animal.gender}</p>
							</div>
						</div>
					) : (
						<p>
							Тваринка з id <b>{id}</b> не знайдена
						</p>
					)}
				</div>
			</div>

			<Footer />
		</>
	)
}

export { AnimalPage }
