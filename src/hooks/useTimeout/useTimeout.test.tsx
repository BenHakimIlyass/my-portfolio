import React from "react";

import useTimeout from ".";
import { renderHook } from "@testing-library/react-hooks";

describe("useMyName tests", () => {
  it("will call the drink function after 100 ms", () => {
    const drink = jest.fn();
    renderHook(() => useTimeout({ execute: () => drink(), delay: 0 }));
    // expect(result).toBe(true);

    expect(drink).toHaveBeenCalled();
  });

  it("will return true after 100ms", () => {
    const { result } = renderHook(() => useTimeout(100));
    expect(result.current).toBe(false);
    setTimeout(() => {
      expect(result.current).toBe(true);
    }, 11);
  });
});
