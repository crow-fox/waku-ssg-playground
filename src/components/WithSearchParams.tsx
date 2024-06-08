"use client";

import { FC } from "react";
import { useRouter_UNSTABLE as useRouter } from "waku";

export const WithSearchParams: FC = () => {
  const { searchParams, push, path } = useRouter();

  const handleClick = (query: string[]) => {
    const newSearchParams = new URLSearchParams(searchParams);

    query.forEach((q) => {
      if (newSearchParams.has(q)) {
        newSearchParams.delete(q);
        return;
      }

      newSearchParams.set(q, "true");
    });

    push(`${path}?${newSearchParams.toString()}`);
  };

  return (
    <div className=" p-4 border border-slate-400 grid gap-y-4">
      <pre>{searchParams.toString()}</pre>
      <ul className=" flex flex-wrap gap-4">
        <li>
          <button
            onClick={() => handleClick(["a"])}
            className=" border-slate-200 border p-2 inline-grid"
          >
            a
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick(["b"])}
            className=" border-slate-200 border p-2 inline-grid"
          >
            b
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick(["c"])}
            className=" border-slate-200 border p-2 inline-grid"
          >
            c
          </button>
        </li>
      </ul>
    </div>
  );
};
