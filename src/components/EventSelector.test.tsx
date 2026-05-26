import React from "react";
import { render } from "@testing-library/react";
import EventSelector from "./EventSelector";

test("renders EventSelector without crashing", () => {
  const events = [
    { originalName: "click", normalizedName: "click" },
    { originalName: "install", normalizedName: "install" },
    { originalName: "purchase", normalizedName: "purchase" },
  ];

  render(
    <EventSelector eventKinds={events} value={null} onChange={() => {}} />
  );
});
