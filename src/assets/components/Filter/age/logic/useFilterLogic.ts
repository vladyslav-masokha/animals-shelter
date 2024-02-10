// import { useCallback, useEffect } from 'react'
// import { Animal } from '../../../IAnimal'
// import { ApplyFilter } from '../../applyFilter/ApplyFilter'

// const useFilterLogic = (
// 	animals: Animal[],
// 	minAge: number | '',
// 	maxAge: number | '',
// 	setMinAge: (value: number | '') => void,
// 	setMaxAge: (value: number | '') => void,
// 	setFilteredAnimals: React.Dispatch<React.SetStateAction<Animal[]>>
// ) => {
// 	// const memoizedApplyFilter = useCallback(() => {
// 	// 	ApplyFilter(
// 	// 		animals,
// 	// 		minAge,
// 	// 		maxAge,
// 	// 		setMinAge,
// 	// 		setMaxAge,
// 	// 		setFilteredAnimals
// 	// 	)
// 	// }, [animals, minAge, maxAge, setMinAge, setMaxAge, setFilteredAnimals])

// 	useEffect(() => {
// 		memoizedApplyFilter()
// 	}, [memoizedApplyFilter])

// 	return memoizedApplyFilter
// }

// export { useFilterLogic }
