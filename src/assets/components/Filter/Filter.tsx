import { Close, FilterAlt } from '@mui/icons-material'
import { Dispatch, SetStateAction, useState } from 'react'
import { Animal } from '../IAnimal'
import styles from './Filter.module.scss'
import { AgeFilter } from './age/AgeFilter'
import { ButtonApplyFilter } from './applyFilter/ButtonApplyFilter'
import { useFilterLogic } from './applyFilter/useFilterLogic'
import { GenderFilter } from './gender/GenderFilter'
import { SizeFilter } from './size/SizeFilter'
import { TypeFilter } from './type/TypeFilter'
import { WeightFilter } from './weight/WeightFilter'

interface FilterProps {
	animals: Animal[]
	setFilteredProducts: Dispatch<SetStateAction<Animal[]>>
}

const Filter: React.FC<FilterProps> = ({ animals, setFilteredProducts }) => {
	const [openFilter, setOpenFilter] = useState(false)

	const [ageFilter, setAgeFilter] = useState<[number, number] | null>(null)
	const [genderFilter, setGenderFilter] = useState<string | null>(null)
	const [sizeFilter, setSizeFilter] = useState<string | null>(null)
	const [typeFilter, setTypeFilter] = useState<string | null>(null)
	const [weightFilter, setWeightFilter] = useState<[number, number] | null>(
		null
	)

	const applyFilters = useFilterLogic(
		animals,
		setFilteredProducts,
		ageFilter,
		genderFilter,
		sizeFilter,
		typeFilter,
		weightFilter
	)

	const openFilterFunction = () => {
		setOpenFilter(!openFilter)
		applyFilters()
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

					<WeightFilter
						setWeightFilter={setWeightFilter}
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
