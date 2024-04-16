import React from 'react'
import styles from "./Contacts.module.css"
function Contacts({contact  ,deleteHandler}) {
  return (
    <li className={styles.item}>
      <p>{contact.name} {contact.lastName}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button onClick={()=>deleteHandler(contact.id)} className={styles.deleteBtn}>🗑</button>
    </li>
  )
}

export default Contacts