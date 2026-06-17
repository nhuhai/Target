import React from 'react';
import RadioOption from '../RadioOption/RadioOption.jsx';
import './TargetFilterPanel.css';

export const targetFilterOptions = [
  { id: 'targets', label: 'Targets' },
  { id: 'target-groups', label: 'Target Groups' },
  { id: 'both', label: 'Both' },
];

export default function TargetFilterPanel({ selectedFilter, onSelectFilter }) {
  return (
    <div className="target-filter-panel" role="radiogroup" aria-label="Target filter">
      {targetFilterOptions.map((option) => (
        <RadioOption
          key={option.id}
          selected={selectedFilter === option.id}
          onClick={() => onSelectFilter(option.id)}
          role="radio"
          aria-checked={selectedFilter === option.id}
        >
          {option.label}
        </RadioOption>
      ))}
    </div>
  );
}
