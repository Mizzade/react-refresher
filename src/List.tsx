import { people } from './data/persons.js'
import { getImageUrl } from './utils';

export default function List() {
  const chemists = people.filter(person => person.profession === 'chemist');
  const nonChemists = people.filter(person => person.profession !== 'chemist');
  const listItems = (items) => items.map(person => (
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  const listOfChemists = listItems(chemists);
  const listOfNonChemists = listItems(nonChemists);

  return (
    <>
      <ul>{listOfChemists}</ul>
      <ul>{listOfNonChemists}</ul>
    </>
  );
}
