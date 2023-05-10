import classes from './Contact.module.css';

const Contact = (props) => {
  return (
    <li className={classes.contact}>
     
      <div className={classes.description}>
        <h2>{props.name}</h2>
        <b>{props.num}</b>
      </div>
    </li>
  );
};

export default Contact;