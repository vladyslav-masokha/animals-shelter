import { Animal } from '../IAnimal'
import { AnimalCard } from './AnimalCard'
import styles from './AnimalsCard.module.scss'

const AnimalsCards: React.FC<{ animals: Animal[] }> = ({ animals }) => {
	return (
		<div className={styles.cards}>
			{animals.length > 0 && <AnimalCard animals={animals} />}
		</div>
	)
}

export { AnimalsCards }
