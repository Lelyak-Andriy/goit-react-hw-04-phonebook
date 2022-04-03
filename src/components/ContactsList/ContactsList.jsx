import styles from './ContactsList.module.css';
import PropTypes from 'prop-types';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ contacts, onDeleteContact }) => (
    (contacts.length === 0) ? <div className={styles.warning}>You have no contacts!</div>
    : <ul className={styles.list}>
        {contacts.map(contact => (
            <li key={contact.id} className={styles.item}>
                <ContactsListItem contact={contact} onDeleteContact={onDeleteContact}/>
            </li>
        ))}
    </ul>
);

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;