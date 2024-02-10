import { Close, FilterAlt } from '@mui/icons-material'
import { Dispatch, SetStateAction, useState } from 'react'
import { Animal } from '../IAnimal'
import styles from './Filter.module.scss'
import { AgeFilter } from './age/AgeFilter'
import { ButtonApplyFilter } from './applyFilter/ButtonApplyFilter'

interface FilterProps {
	animals: Animal[]
	setFilteredProducts: Dispatch<SetStateAction<Animal[]>>
}

const Filter: React.FC<FilterProps> = ({ animals, setFilteredProducts }) => {
	const [openFilter, setOpenFilter] = useState(false)
	const openFilterFunction = () => setOpenFilter(!openFilter)

	const [ageFilter, setAgeFilter] = useState<[number, number] | null>(null)

	const applyFilters = () => {
		if (animals.length === 0) return

		const filteredProducts = animals.filter(animal => {
			if (ageFilter === null) return true
			
			return animal.age >= ageFilter[0] && animal.age <= ageFilter[1]
		})

		setFilteredProducts(filteredProducts)
	}

	const logicOpenFilter = openFilter
		? `${styles.filterBlock} ${styles.visible}`
		: `${styles.filterBlock}`

	return (
		<div className={styles.filter}>
			<div className={styles.filterBody}>
				<button className={styles.filterBtn} onClick={openFilterFunction}>
					<FilterAlt />
					Фільтр
				</button>

				<div className={logicOpenFilter}>
					<button className={styles.closeFilter} onClick={openFilterFunction}>
						<Close />
					</button>

					<AgeFilter setAgeFilter={setAgeFilter} applyFilters={applyFilters} />
					{/* <GenderFilter
						setGenderFilter={setGenderFilter}
						applyFilters={applyFilters}
					/>
					<SizeFilter
						setSizeFilter={setSizeFilter}
						applyFilters={applyFilters}
					/>
					<TypeFilter
						setTypeFilter={setTypeFilter}
						applyFilters={applyFilters}
					/> */}

					<ButtonApplyFilter
						applyFilters={applyFilters}
						openFilterFunction={openFilterFunction}
					/>
				</div>
			</div>
		</div>
	)
}

export { Filter }
