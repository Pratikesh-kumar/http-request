
import { Fragment } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
function App() {
  const contactList = [
    {
      id: 1,
      contactName: 'Rohit Sharma',
      contactNum: '9833445566',

    },
    {
      id: 2,
      contactName: 'Mohit Sharma',
      contactNum: '8833445566',
      
    },
    {
      id: 3,
      contactName: 'Raj Kumar',
      contactNum: '7833444566',
      
    },
  ];
  return (
    <Fragment>
      <section>
        <button>add contact </button>
        <button>fetch contact</button>
      </section>
      <section>
       <AddContact/>
      </section>
      <section>
       <ContactList contacts ={contactList}/>
      </section>
      
    </Fragment>
  );
}

export default App;
