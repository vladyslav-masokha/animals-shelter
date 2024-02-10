<<<<<<< HEAD
import React, {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react'
import { Animal } from '../IAnimal'

interface FilterContextProps {
	animals: Animal[]
	setFilteredAnimals: Dispatch<SetStateAction<Animal[]>>
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined)

const useFilter = () => {
	const context = useContext(FilterContext)
	if (!context) {
		throw new Error('useFilter must be used within a FilterProvider')
	}
	return context
}

interface FilterProviderProps {
	children: ReactNode
}

const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
	const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>([])

	return (
		<FilterContext.Provider
			value={{ animals: filteredAnimals, setFilteredAnimals }}
		>
			{children}
		</FilterContext.Provider>
	)
}

export { FilterProvider, useFilter }
=======
import React, {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react'
import { Animal } from '../IAnimal'

interface FilterContextProps {
	animals: Animal[]
	setFilteredAnimals: Dispatch<SetStateAction<Animal[]>>
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined)

const useFilter = () => {
	const context = useContext(FilterContext)
	if (!context) {
		throw new Error('useFilter must be used within a FilterProvider')
	}
	return context
}

interface FilterProviderProps {
	children: ReactNode
}

const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
	const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>([])

	return (
		<FilterContext.Provider
			value={{ animals: filteredAnimals, setFilteredAnimals }}
		>
			{children}
		</FilterContext.Provider>
	)
}

export { FilterProvider, useFilter }
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
