import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Hero from "./Hero";
import { BrowserRouter } from "react-router-dom";

test("Hero component", () => {
  render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
  const text = screen.getByText(
    "Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)"
  );
  expect(text).toBeDefined();
});
