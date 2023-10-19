export const FormComponent = ({ addContact }) => {
  const getData = event => {
    event.preventDefault();

    const name = event.currentTarget.name.value;
    const number = event.currentTarget.number.value;

    addContact(name, number);

    event.currentTarget.reset();
  };

  return (
    <form onSubmit={getData}>
      <label className="form-label" htmlFor="name-input">
        Name
      </label>
      <input
        className="form-input"
        id="name-input"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label className="form-label" htmlFor="number-input">
        Phone number
      </label>
      <input
        className="form-input"
        id="number-input"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button>Add contact</button>
    </form>
  );
};
