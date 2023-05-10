import { useRef } from "react";
import classes from "./AddContact.module.css";



const AddContact = (props) => {
  const contactNameRef = useRef("");
  const contactNumRef = useRef("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // skipping validation part
    const contact = {
      contactName: contactNameRef.current.value,
      contactNum: contactNameRef.current.value,
    };

    props.onAddContact(contact);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="Contact Name">Contact Name</label>
        <input
          type="text"
          placeholder="Eg: pk"
          id="contactName"
          ref={contactNameRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="contactNum">Contact Number</label>

        <input
          type="text"
          placeholder="10 digits"
          minLength={"10"}
          maxLength={"10"}
          id="contactNumRef"
          ref={contactNumRef}
        />
      </div>
      <button>+ Save</button>
    </form>
  );
};

export default AddContact;
