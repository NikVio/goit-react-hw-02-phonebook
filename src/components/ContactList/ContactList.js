import { Contacts } from './Contacts';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Contacts el={item} Delete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
