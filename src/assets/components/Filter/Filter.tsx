import { Close, FilterAlt } from '@mui/icons-material'
import { Dispatch, SetStateAction, useState } from 'react'
import { Animal } from '../IAnimal'
import styles from './Filter.module.scss'
import { AgeFilter } from './age/AgeFilter'
import { ButtonApplyFilter } from './applyFilter/ButtonApplyFilter'
import { GenderFilter } from './gender/GenderFilter'
import { SizeFilter } from './size/SizeFilter'
import { TypeFilter } from './type/TypeFilter'

interface FilterProps {
	animals: Animal[]
	setFilteredProducts: Dispatch<SetStateAction<Animal[]>>
}

const Filter: React.FC<FilterProps> = ({ animals, setFilteredProducts }) => {
	const [openFilter, setOpenFilter] = useState(false)
	const openFilterFunction = () => setOpenFilter(!openFilter)

	const [ageFilter, setAgeFilter] = useState<number | null>(null)
	const [genderFilter, setGenderFilter] = useState<string | null>(null)
	const [sizeFilter, setSizeFilter] = useState<string | null>(null)
	const [typeFilter, setTypeFilter] = useState<string | null>(null)

	const applyFilters = () => {
		let filtered = [...animals]

		if (ageFilter !== null) {
			filtered = filtered.filter(product => product.age === ageFilter)
		}

		if (genderFilter !== null) {
			filtered = filtered.filter(product => product.gender === genderFilter)
		}

		if (sizeFilter !== null)
			filtered = filtered.filter(product => product.size === sizeFilter)

		if (typeFilter !== null)
			filtered = filtered.filter(product => product.type === typeFilter)

		setFilteredProducts(filtered)
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
					<GenderFilter
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
					/>

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
