import { useState } from 'react';

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(() => {
    const groupList = localStorage.getItem(key);
    return groupList ? JSON.parse(groupList) : initialState;
  });
}
