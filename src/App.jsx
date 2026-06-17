import React, { useState } from "react";
import Tab from "./components/Tab/Tab.jsx";
import Divider from "./components/Divider/Divider.jsx";
import SearchPanel from "./components/SearchPanel/SearchPanel.jsx";
import SearchResults from "./components/SearchResults/SearchResults.jsx";
import TargetFilterPanel, {
  targetFilterOptions,
} from "./components/TargetFilterPanel/TargetFilterPanel.jsx";
import TeamCard from "./components/TeamCard/TeamCard.jsx";

const targets = [
  {
    id: "target-1",
    ball: "321456987456987",
    date: "Nov. 01, 2023 - Jun. 10, 2024",
  },
  {
    id: "target-2",
    ball: "321456987456987",
    date: "Dec. 25, 2022 - Mar. 25, 2023",
  },
  {
    id: "target-3",
    ball: "321456987456987",
    date: "Apr. 05, 2023 - May. 15, 2023",
  },
  {
    id: "target-4",
    ball: "321456987456987",
    date: "May. 25, 2023 - Jun. 15, 2023",
  },
];

const caseResults = [
  { id: "case-1", label: "Case 1" },
  { id: "case-2", label: "Case 2" },
  { id: "case-3", label: "Case 3" },
  { id: "case-4", label: "Case 4" },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCaseId, setSelectedCaseId] = useState(null);
  const [selectedTargetFilter, setSelectedTargetFilter] = useState("targets");
  const [count, setCount] = useState(0);

  const handleConfirm = () => {
    const selectedCase =
      caseResults.find((caseItem) => caseItem.id === selectedCaseId) ?? null;
    const targetFilter =
      targetFilterOptions.find(
        (option) => option.id === selectedTargetFilter,
      ) ?? null;
    const payload = {
      case: selectedCase,
      targetFilter,
      searchQuery: searchQuery.trim(),
      target: {
        name: "Bruce Lee",
        teamName: "The Team Name",
        net: "321654987654321",
        targets,
      },
      count,
    };

    console.log("Confirm payload", payload);
  };

  return (
    <main className="page">
      <section className="hud" aria-label="Target selection interface">
        <Tab />
        <Divider />

        <SearchPanel value={searchQuery} onChange={setSearchQuery} />
        <SearchResults
          query={searchQuery}
          results={caseResults}
          selectedCaseId={selectedCaseId}
          onSelectCase={setSelectedCaseId}
        />
        <TargetFilterPanel
          selectedFilter={selectedTargetFilter}
          onSelectFilter={setSelectedTargetFilter}
        />
        <TeamCard />

        <div className="legacy-content">
          <div className="team-card active-card">
            <header className="active-header">
              <div>
                <h1>
                  BRUCE LEE <span className="info-ring">i</span>
                </h1>
                <p>THE TEAM NAME</p>
              </div>
              <div className="active-tools">
                <svg viewBox="0 0 28 18" aria-hidden="true">
                  <path d="M3 3 14 14 25 3" />
                </svg>
                <span>4</span>
                <div className="watch-icon light" aria-hidden="true" />
              </div>
            </header>

            <div className="net-row">
              <span className="checkbox" aria-hidden="true" />
              <strong>Net: 321654987654321</strong>
              <span className="status-dot" aria-hidden="true" />
            </div>

            <ol className="target-list">
              {targets.map((target, index) => (
                <li key={target.id}>
                  <span className="number">{index + 1}.</span>
                  <span className="compass" aria-hidden="true" />
                  <div>
                    <p>Ball: {target.ball}</p>
                    <time>{target.date}</time>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="control-card">
            <div className="stepper">
              <span>Count: {count}</span>
              <button aria-label="Decrease" onClick={() => setCount(count - 1)}>
                −
              </button>
              <button aria-label="Increase" onClick={() => setCount(count + 1)}>
                +
              </button>
            </div>
            <button className="select-button">
              <span>Count: {count}</span>
              <svg viewBox="0 0 28 18" aria-hidden="true">
                <path d="M3 3 14 14 25 3" />
              </svg>
            </button>
          </div>

          <div className="confirm-strip">
            <button type="button" onClick={handleConfirm}>
              CONFIRM
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
