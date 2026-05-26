import React, { useState } from "react";
import EventSelector, { EventKind } from "../components/EventSelector";

function story(events: EventKind[]) {
  return () => {
    const [value, setValue] = useState<string | null>(null);

    function onChange(next: string | null) {
      setValue(next);
      console.log("onChange", next);
    }

    return (
      <>
        <p>
          <button onClick={() => setValue(null)}>Reset Value</button>
        </p>

        <EventSelector onChange={onChange} eventKinds={events} value={value} />
      </>
    );
  };
}

const events: EventKind[] = [
  { originalName: "click", normalizedName: "click" },
  { originalName: "install", normalizedName: "install" },
  { originalName: "purchase", normalizedName: "purchase" },
];

const overlappingEvents: EventKind[] = [
  { originalName: "click", normalizedName: "click" },
  { originalName: "Purchase", normalizedName: "purchase" },
  { originalName: "purchase", normalizedName: "purchase" },
  { originalName: "install", normalizedName: "install" },
  { originalName: "Install", normalizedName: "install" },
  { originalName: "Install[548325783]", normalizedName: "install" },
];

export const SelectorWithOverlappingEvents = story(overlappingEvents);
export const Selector = story(events);

export default {
  title: "EventSelector",
  component: EventSelector,
};
