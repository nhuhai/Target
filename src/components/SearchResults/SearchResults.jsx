import React from 'react';
import CombinedShape from '../CombinedShape/CombinedShape.jsx';
import './SearchResults.css';

export default function SearchResults({ query, results, selectedCaseId, onSelectCase }) {
  if (!query.trim()) {
    return null;
  }

  return (
    <CombinedShape className="search-results" ariaLabel="Search results">
      {results.map((result) => (
        <button
          className={[
            'search-results__row',
            selectedCaseId === result.id ? 'search-results__row--selected' : '',
          ].filter(Boolean).join(' ')}
          key={result.id}
          type="button"
          aria-pressed={selectedCaseId === result.id}
          onClick={() => onSelectCase(result.id)}
        >
          {result.label}
        </button>
      ))}
    </CombinedShape>
  );
}
