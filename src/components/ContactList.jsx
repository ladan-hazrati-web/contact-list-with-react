import React from 'react'
import Contacts from './Contacts'
import styles from "./ContactList.module.css"
function ContactList({contacts , deleteHandler}) {
  return (
    <div className={styles.container}>
        <h2>Contact List</h2>
        {!contacts.length && <p className={styles.noItem}>No Item</p>}
        <ul className={styles.list}>{contacts.map(contact=><Contacts key={contact.id} contact={contact} deleteHandler={deleteHandler}/> )}</ul>
    </div>
  )
}

export default ContactList