import { useParams } from 'react-router-dom'
import { valueLabelFormatAge } from '../../components/filter/age/logic/valueLabelFormatAge'
import { valueLabelFormatWeight } from '../../components/filter/weight/logic/valueLabelFormatWeight'
import { Header } from '../../ui/Header/Header'
import { useFetchData } from '../../useFetchData'
import { useTitleLogic } from '../globalLogic/titleLogic'
import styles from './AnimalPage.module.scss'

const AnimalPage = () => {
	const { id } = useParams<{ id: string }>()
	const animalsData = './animals.json'

	const data = useFetchData(animalsData)
	const animal = data.find(animal => animal.id === +id)

	useTitleLogic({ namePage: animal ? animal.name : '', id: +id })

	return (
		<>
			<Header />

			<div className={styles.about}>
				<div className='wrapper'>
					{animal !== undefined ? (
						<>
							<h2>{animal.name} (in developing)</h2>
							<h3>{valueLabelFormatAge(animal.age)} </h3>
							<h3>{valueLabelFormatWeight(animal.weight)} </h3>
						</>
					) : (
						<p>
							Тваринка з id <b>{id}</b> не знайдена
						</p>
					)}
				</div>
			</div>
		</>
	)
}

export { AnimalPage }
