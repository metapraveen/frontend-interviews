# Frontend Challenge

## Getting Started

Requires Node.js matching `.node-version` (20.14.0).

```bash
npm install
npm run dev          # Vite dev server on http://localhost:3000
npm run storybook    # Storybook on http://localhost:9001
npm test             # Vitest in watch mode
npm run test:run     # Vitest one-shot
```

### CodeSandbox

The repo is set up for a CodeSandbox **Devbox**. After importing, the `dev` task starts automatically. Storybook is configured but idle by default, start it from the Tasks panel when needed.

## Goal

- **Showcase Your Work Structure**: How you organize and structure your code.
- **Demonstrate Testing Practices**: What types of tests you implement and the aspects of your code you focus on testing.
- **Commit Message Clarity**: Show how you write commit messages.

#### Additional Notes

- This challenge is designed to be completed in approximately 30 to 60 minutes.
- The focus is on demonstrating your approach and practices rather than achieving a pixel-perfect solution.
- Feel free to introduce any components, abstractions, tests, or dependencies that you find appropriate for the task.

## Context

Our customers are the companies behind mobile apps used by millions of people.

They send us a continuous stream of different events through an intermediate Partner.
The `EventKind` is identified by the name attached to each event (i.e `install` or `purchase`)

Sometimes when the customer changes the settings or even the intermediate partner
the casing of the name can change or an id might be attached in square brackets to the name (i.e `install[548943784]`).

We normalize the name that is sent to us to compensate for this in our backend
as events like `Purchase` and `purchase` still mean the same thing,
but we need to be able to differentiate between events with different original names
to communicate with the intermediate Partners.

## Task

Build a component that allows the user (=someone working in our company) to select one of the given [EventKinds](./src/components/EventSelector.tsx) to control what normalized event name we are targeting in our backend.

To get started, refer to the following files: [EventSelector.tsx](./src/components/EventSelector.tsx), [EventSelector.stories.tsx](./src/stories/EventSelector.stories.tsx), and [eventSelectOptions.tsx](./src/utilities/eventSelectOptions.tsx).

For the options that represent [EventKinds](./src/components/EventSelector.tsx) that overlap in their `normalizedName`, ensure that the label displays this overlap to the user. An example of how this could be done is shown below:

![event-selector example](eventinputexample.png)

**Task Submission**: Once you are done, create a PR with your changes to this repo.

## Preview

Before (initial state, before solution is wired up):

![before](screenshots/before.png)

After (overlapping `normalizedName` values collapsed into a single option, original names joined with ` | `):

![after](screenshots/after.png)
