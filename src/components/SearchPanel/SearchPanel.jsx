import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CombinedShape from '../CombinedShape/CombinedShape.jsx';
import './SearchPanel.css';

export default function SearchPanel({ value, onChange }) {
  return (
    <CombinedShape className="search-panel Combined-Shape" ariaLabel="Case selector">
      <svg className="search-panel__search" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="27" cy="27" r="14" />
        <path d="M39 39 54 54" />
      </svg>
      <input
        className="search-panel__input"
        aria-label="Search cases"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <div className="search-panel__case">
        <span className="CASE-4-CASES">
          <span className="text-style-1">CASE/</span>
          <span className="text-style-2">4 CASES</span>
        </span>
        <ExpandMoreIcon className="Material-iconsexpand-morewhite" />
      </div>
    </CombinedShape>
  );
}
