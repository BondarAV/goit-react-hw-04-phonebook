export const Filter = ({ getNewFilter }) => {
  return (
    <div className="filter">
      <label className="filter-label" htmlFor="filter">
        Find contacts by name
      </label>

      <input
        onChange={event => getNewFilter(event.currentTarget.value)}
        className="filter-input"
        id="filter"
        type="text"
        name="name-filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};
