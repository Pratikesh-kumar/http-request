import Contact from './Contact';
import classes from './ContactList.module.css';

const ContactList = (props) => {
  return (
    <ul className={classes['contact-list']}>
      {props.contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.contactName}
          num={contact.contactNum}
        
        />
      ))}
    </ul>
  );
};

export default ContactList;