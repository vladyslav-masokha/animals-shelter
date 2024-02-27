import { useEffect, useState } from 'react'
import { Animal } from '../../components/IAnimal'
import { AnimalsCards } from '../../components/animalCards/AnimalsCards'
import { Filter } from '../../components/filter/Filter'
import { Header } from '../../ui/Header/Header'
import { Footer } from '../../ui/footer/Footer'
import { useFetchData } from '../../useFetchData'
import styles from './HomePage.module.scss'

const HomePage = () => {
	const [animals, setAnimals] = useState<Animal[]>([])
	const [filteredProducts, setFilteredProducts] = useState<Animal[]>([])
	const animalsData = './animals.json'
	const data = useFetchData(animalsData)

	useEffect(() => {
		setAnimals(data)
		setFilteredProducts(data)
	}, [data])

	return (
		<>
			<Header />

			<div className={styles.home}>
				<div className='wrapper'>
					<div className={styles.homeBody}>
						<Filter
							animals={animals}
							setFilteredProducts={setFilteredProducts}
						/>
						<AnimalsCards animals={filteredProducts} />
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export { HomePage }
