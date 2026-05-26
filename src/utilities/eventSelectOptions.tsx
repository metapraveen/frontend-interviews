import { SelectOption, EventKind } from "../components/EventSelector";

export default function eventSelectOptions(
  eventKinds: EventKind[]
): SelectOption[] {
  // TODO: convert the passed in EventKind[] to a SelectOption[].
  // The normalizedName of the EventKind should be mapped the value in the SelectOption
  // and the originalName to the label.
  // The passed in eventKinds can overlap in their `normalizedName` but differ
  // in their `originalName` (see `src/stories/EventSelector.stories.tsx`).
  // For the options that represent eventKinds that overlap in their `normalizedName`,
  // the label should show this clearly to the user.

  return [];
}
