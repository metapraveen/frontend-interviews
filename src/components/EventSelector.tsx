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
  const options = eventSelectOptions(props.eventKinds);

  return <div>TODO: Replace me with a select component</div>;
}

export default EventSelector;
