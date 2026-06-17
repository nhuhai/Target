import React from 'react';
import selectedIcon from './RadioSelected.svg';
import unselectedIcon from './RadioUnselected.svg';
import './RadioOption.css';

export default function RadioOption({
  selected = false,
  children,
  onClick,
  role,
  'aria-checked': ariaChecked,
}) {
  if (onClick) {
    return (
      <button
        className={['radio', selected ? 'active' : ''].filter(Boolean).join(' ')}
        type="button"
        onClick={onClick}
        role={role}
        aria-checked={ariaChecked}
      >
        <img
          className="radio__icon"
          src={selected ? selectedIcon : unselectedIcon}
          alt=""
          aria-hidden="true"
        />
        {children}
      </button>
    );
  }

  return (
    <label className={['radio', selected ? 'active' : ''].filter(Boolean).join(' ')}>
      <img
        className="radio__icon"
        src={selected ? selectedIcon : unselectedIcon}
        alt=""
        aria-hidden="true"
      />
      {children}
    </label>
  );
}
