import { PropTypes } from 'prop-types';
import { StyledContactForm } from './Styled';

function ContactForm({ addContact, onChange, name, number }) {
  return (
    <StyledContactForm onSubmit={addContact}>
      <label className="input-group">
        <span className="name">Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={onChange}
          required
        />
      </label>
      <label className="input-group">
        <span className="name">Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={onChange}
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </StyledContactForm>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactForm;
