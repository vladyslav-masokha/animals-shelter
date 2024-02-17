import { Dispatch, SetStateAction, useCallback } from 'react'
import { Animal } from '../../IAnimal'

const useFilterLogic = (
	animals: Animal[],
	setFilteredProducts: Dispatch<SetStateAction<Animal[]>>,
	ageFilter: [number, number] | null,
	genderFilter: string | null,
	sizeFilter: string | null,
	typeFilter: string | null,
	weightFilter: [number, number] | null
) => {
	const applyFilters = useCallback(() => {
		if (animals.length === 0) return

		let filteredProducts = animals

		if (ageFilter !== null) {
			filteredProducts = filteredProducts.filter(animal => {
				return animal.age >= ageFilter[0] && animal.age <= ageFilter[1]
			})
		}

		if (genderFilter !== null) {
			filteredProducts = filteredProducts.filter(animal => {
				return animal.gender === genderFilter
			})
		}

		if (sizeFilter !== null) {
			filteredProducts = filteredProducts.filter(animal => {
				return animal.size === sizeFilter
			})
		}

		if (typeFilter !== null) {
			filteredProducts = filteredProducts.filter(animal => {
				return animal.type === typeFilter
			})
		}

		if (weightFilter !== null) {
			filteredProducts = filteredProducts.filter(animal => {
				return (
					animal.weight >= weightFilter[0] && animal.weight <= weightFilter[1]
				)
			})
		}

		setFilteredProducts(filteredProducts)
	}, [
		animals,
		setFilteredProducts,
		ageFilter,
		genderFilter,
		sizeFilter,
		typeFilter,
		weightFilter,
	])

	return applyFilters
}

export { useFilterLogic }
