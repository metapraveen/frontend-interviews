import React, { useState } from "react";
import EventSelector, { EventKind } from "../components/EventSelector";
import { action } from "@storybook/addon-actions";


function story(events: EventKind[]) {
  return () => {
    const [value, setValue] = useState(null as string | null);
    const onChangeAction = action("onChange");

    function onChange(value: null | string) {
      setValue(value);
      onChangeAction(value);
    }

    return (
      <>
        <p><button onClick={() => setValue(null)}>Reset Value</button></p>

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
