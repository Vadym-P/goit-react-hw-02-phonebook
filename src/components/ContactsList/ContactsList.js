import React from 'react';
import s from './ContactsList.module.css';

export default function ContactsList({ contactsList }) {
  return (
    <ul className={s.list}>
      {contactsList.map(contact => (
        <li className={s.item} key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
}
