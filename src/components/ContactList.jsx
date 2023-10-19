import { nanoid } from 'nanoid/non-secure';

export const ContactList = ({ filteredNames, deleteContact }) => {
  return (
    <ul className="contact-list">
      {filteredNames.map(contact => (
        <li className="contact-element" key={nanoid()}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            className="delete-contact"
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
