// ChangeLog.tsx
import React from "react";
import { useMenuContext } from "./App";
import { format } from "date-fns";

export function ChangeLog() {
  const { changeLog, clearChangeLog } = useMenuContext();

  return (
    <div className="min-h-screen p-6 bg-amber-50">
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Change Log</h2>
          <button onClick={clearChangeLog} className="px-3 py-1 bg-red-600 text-white rounded">Clear Log</button>
        </div>

        {changeLog.length === 0 ? (
          <p className="text-sm text-neutral-500">No changes recorded yet.</p>
        ) : (
          <ul className="space-y-3">
            {changeLog.map((entry) => (
              <li key={entry.id} className="p-3 border rounded">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold capitalize">{entry.action}</div>
                    <div className="text-sm text-neutral-600">{entry.details}</div>
                  </div>
                  <div className="text-xs text-neutral-500">{format(new Date(entry.timestamp), "yyyy-MM-dd HH:mm")}</div>
                </div>
                {entry.dishId && <div className="mt-2 text-xs text-neutral-500">Dish ID: {entry.dishId}</div>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

