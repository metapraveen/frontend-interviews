import React from "react";
import eventSelectOptions from "../utilities/eventSelectOptions";

export interface EventKind {
  normalizedName: string;
  originalName: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

type Props = {
  value: string | null;
  onChange(newValue: string | null): void;
  eventKinds: EventKind[];
};

function EventSelector(props: Props) {
  return (
    <select
      value={props.value ?? ""}
      onChange={(event) => {
        props.onChange(event.target.value);
      }}
    >
      <option value="">Select an event...</option>
      {props.eventKinds.map((option, index) => (
        <option key={option.normalizedName+index} value={option.normalizedName}>
          {option.originalName}
        </option>
      ))}
    </select>
  );
}

export default EventSelector;
