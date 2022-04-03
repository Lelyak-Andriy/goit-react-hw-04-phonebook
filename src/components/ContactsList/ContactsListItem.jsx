import styles from './ContactsList.module.css';
import PropTypes from 'prop-types';

const ContactsListItem = ({ contact, onDeleteContact }) => (
    <>
        <span className={styles.info}>{contact.name}: {contact.number}</span>
        <button className={styles.button} type="button" onClick={() =>
            onDeleteContact(contact.id)}>Delete</button>
    </>
);

ContactsListItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;