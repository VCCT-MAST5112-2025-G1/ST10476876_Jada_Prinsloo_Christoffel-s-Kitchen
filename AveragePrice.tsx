// AveragePrice.tsx
import React from "react";
import { useMenuContext } from "./App";

export function AveragePrice() {
  const { computeAveragePrice } = useMenuContext();
  const avg = computeAveragePrice();

  return (
    <div className="bg-white p-3 rounded shadow inline-block">
      <div className="text-sm text-neutral-600">Average price (all items)</div>
      <div className="text-xl font-semibold text-amber-800">
        {isNaN(avg) ? "R0" : `R${Math.round(avg * 100) / 100}`}
      </div>
    </div>
  );
}

