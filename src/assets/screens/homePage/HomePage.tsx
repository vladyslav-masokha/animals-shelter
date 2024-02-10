import { useEffect, useState } from 'react'
import { AnimalsCards } from '../../components/AnimalCards/AnimalsCards'
import { Filter } from '../../components/Filter/Filter'
import { Animal } from '../../components/IAnimal'
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
					<Filter animals={animals} setFilteredProducts={setFilteredProducts} />
					<AnimalsCards animals={filteredProducts} />
				</div>
			</div>
		</>
	)
}

export { HomePage }
