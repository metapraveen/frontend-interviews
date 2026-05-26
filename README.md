# Frontend Challenge

## Getting Started

To run this task, you need to have [Node.js](https://nodejs.org/en/download/) installed, with the `node --version` declared in [.node-version](.node-version).

- `npm install` to install dependencies.

- `npm run storybook` to run storybook.

- `npm run test` to run the tests.

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
