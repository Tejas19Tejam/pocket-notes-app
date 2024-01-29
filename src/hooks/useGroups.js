import { useEffect, useState } from "react";

export function useGroups(initialState, key) {
  const [value, setValue] = useState(() => {
    const groupList = localStorage.getItem(key);
    return groupList ? JSON.parse(groupList) : initialState;
  });

  // Storing watched movies in the local storage (USING EFFECT'S )(Way 02)

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
