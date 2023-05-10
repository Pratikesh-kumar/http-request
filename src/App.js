import { Fragment, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
const DATA_URL =
  "https://raw.githubusercontent.com/Pratikesh-kumar/http-request/master/src/data.json";
function App() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const fetchContactHandler = () => {
    setIsloading(true)
    fetch(DATA_URL)
      .then((rawResponse) => {
        console.log(rawResponse);
        return rawResponse.json();
      })
      .then((response) => {
        console.log(response);
        const data = response.data.map((contactData) => {
          return {
            id: contactData.id,
            contactName: contactData.name,
            contactNum: contactData.number,
          };
        });
        setContacts(data);
        setIsloading(false);
      });
  };
  const addContactHandler = (contact) => {
    console.log(contact);
  };
  let content = <p>no contacts available!!</p>;

  if (contacts.length > 0) {
    content = <ContactList contacts={contacts} />;
  }
  if(isLoading){
    content=<p>loading please wait</p>
  }
  return (
    <Fragment>
      <section>
        <button>add contact </button>
        <button onClick={fetchContactHandler}>fetch contact</button>
      </section>
      <section>
        <AddContact onAddContact={addContactHandler} />
      </section>
      <section>{content}</section>
    </Fragment>
  );
}

export default App;
