import React, { useState } from "react";
import EventSelector, { EventKind } from "./components/EventSelector";

const events: EventKind[] = [
  { originalName: "click", normalizedName: "click" },
  { originalName: "Purchase", normalizedName: "purchase" },
  { originalName: "purchase", normalizedName: "purchase" },
  { originalName: "install", normalizedName: "install" },
  { originalName: "Install", normalizedName: "install" },
  { originalName: "Install[548325783]", normalizedName: "install" },
  { originalName: "install", normalizedName: "install" },
];

function App() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div>
      <h1>Event Selector</h1>
      <p>
        Selected: <code>{value ?? "null"}</code>{" "}
        <button onClick={() => setValue(null)}>Reset</button>
      </p>
      <EventSelector value={value} onChange={setValue} eventKinds={events} />
    </div>
  );
}

export default App;
