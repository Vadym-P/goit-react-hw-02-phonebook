import React from 'react';
import s from './ContactsList.module.css';

export default function ContactsList({ contactsList }) {
  return (
    <ul className={s.list}>
      {contactsList.map(contact => (
        <li className={s.item}>{contact}</li>
      ))}
    </ul>
  );
}
