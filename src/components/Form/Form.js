import React from 'react';

export default function Form({ label, title, onChange, name, onSubmit, add }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        {label}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title={title}
          required
          value={name}
          onChange={onChange}
        />
      </label>
      <button type="submit">{add}</button>
    </form>
  );
}
