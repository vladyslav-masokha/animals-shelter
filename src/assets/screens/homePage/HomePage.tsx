import { useEffect, useState } from 'react'
import { Animal } from '../../components/IAnimal'
import { AnimalsCards } from '../../components/animalCards/AnimalsCards'
import { Filter } from '../../components/filter/Filter'
import { Header } from '../../ui/Header/Header'
import styles from './HomePage.module.scss'

const HomePage = () => {
	const [animals, setAnimals] = useState<Animal[]>([])
	const [filteredProducts, setFilteredProducts] = useState<Animal[]>([])
	const animalsData = './animals.json'

	useEffect(() => {
		fetch(animalsData)
			.then(res => res.json())
			.then(data => {
				setAnimals(data)
				setFilteredProducts(data)
			})
	}, [])

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
		</>
	)
}

export { HomePage }
