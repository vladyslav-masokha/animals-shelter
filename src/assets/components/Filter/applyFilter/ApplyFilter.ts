<<<<<<< HEAD
import { Animal } from '../../IAnimal'

interface ApplyFilterProps {
	animals: Animal[]
	minAge: number | ''
	maxAge: number | ''
	setMinAge: (value: number | '') => void
	setMaxAge: (value: number | '') => void
	setFilteredAnimals: (animals: Animal[]) => void
}

const ApplyFilter: React.FC<ApplyFilterProps> = ({
	animals,
	minAge,
	maxAge,
	setMinAge,
	setMaxAge,
	setFilteredAnimals,
}) => {
	const animalsArray = Array.isArray(animals) ? animals : [animals]

	const filteredAnimals = animalsArray.filter(animal => {
		if (minAge !== '' && maxAge !== '' && +minAge > +maxAge) {
			setMinAge(+maxAge)
			setMaxAge(+minAge)
		}

		const ageInRange =
			(minAge === '' || animal.age >= +minAge) &&
			(maxAge === '' || animal.age <= +maxAge)

		return ageInRange
	})

	setFilteredAnimals(filteredAnimals)

	return null
}

export { ApplyFilter }
=======
import { Animal } from '../../IAnimal'

interface ApplyFilterProps {
	animals: Animal[]
	minAge: number | ''
	maxAge: number | ''
	setMinAge: (value: number | '') => void
	setMaxAge: (value: number | '') => void
	setFilteredAnimals: (animals: Animal[]) => void
}

const ApplyFilter: React.FC<ApplyFilterProps> = ({
	animals,
	minAge,
	maxAge,
	setMinAge,
	setMaxAge,
	setFilteredAnimals,
}) => {
	const animalsArray = Array.isArray(animals) ? animals : [animals]

	const filteredAnimals = animalsArray.filter(animal => {
		if (minAge !== '' && maxAge !== '' && +minAge > +maxAge) {
			setMinAge(+maxAge)
			setMaxAge(+minAge)
		}

		const ageInRange =
			(minAge === '' || animal.age >= +minAge) &&
			(maxAge === '' || animal.age <= +maxAge)

		return ageInRange
	})

	setFilteredAnimals(filteredAnimals)

	return null
}

export { ApplyFilter }
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
