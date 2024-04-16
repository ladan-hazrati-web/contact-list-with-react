import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import ContactList from "./ContactList";
import { v4 } from "uuid";
function ContactForm() {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [contacts, setContacts] = useState([]);
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value, id: v4() });
  };
  const [alert, setAlert] = useState("");
  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("please inter a valid data");
      return;
    }
    setAlert("");

    setContacts((contacts) => [...contacts , contact]);
    console.log(contact);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  const deleteHandler=(id)=>{
   const newContacts =  contacts.filter(contact=>{
    return contact.id !==id
    })
    setContacts(newContacts)
  }
  return (
    <>
      <div className={styles.container}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={contact.name}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={contact.lastName}
            onChange={changeHandler}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={contact.email}
            onChange={changeHandler}
          />
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            value={contact.phone}
            onChange={changeHandler}
          />
        </div>
        <button className={styles.addBtn} onClick={addHandler}>
          Add
        </button>
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactList contacts={contacts} deleteHandler={deleteHandler} />
    </>
  );
}

export default ContactForm;
