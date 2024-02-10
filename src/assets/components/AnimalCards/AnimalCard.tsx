<<<<<<< HEAD
import { Link } from 'react-router-dom'
import { Animal } from '../IAnimal'
import styles from './AnimalsCard.module.scss'

interface AnimalCardProps {
	animals: Animal[]
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animals }) => {
	return (
		<>
			{animals.length !== 0 ? (
				animals.map(animal => (
					<Link to={`/${animal.id}`} className={styles.card} key={animal.id}>
						<img
							className={styles.cardImage}
							src={animal.image}
							alt={animal.name}
						/>

						<div className={styles.cardInfo}>
							<h3 className={styles.name}>{animal.name}</h3>
						</div>
					</Link>
				))
			) : (
				<p>Animals is not defined!</p>
			)}
		</>
	)
}

export { AnimalCard }
=======
import { Link } from 'react-router-dom'
import { Animal } from '../IAnimal'
import styles from './AnimalsCard.module.scss'

interface AnimalCardProps {
	animals: Animal[]
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animals }) => {
	return (
		<>
			{animals.length !== 0 ? (
				animals.map(animal => (
					<Link to={`/${animal.id}`} className={styles.card} key={animal.id}>
						<img
							className={styles.cardImage}
							src={animal.image}
							alt={animal.name}
						/>

						<div className={styles.cardInfo}>
							<h3 className={styles.name}>{animal.name}</h3>
						</div>
					</Link>
				))
			) : (
				<p>Animals is not defined!</p>
			)}
		</>
	)
}

export { AnimalCard }
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
