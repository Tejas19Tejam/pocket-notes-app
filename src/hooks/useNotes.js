import { useEffect, useState } from "react";

export function useNotes(initialState, key) {
  const [notes, setNotes] = useState(() => {
    const notesList = JSON.parse(localStorage.getItem(key));
    return notesList ? notesList : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(notes));
    },
    [notes, key]
  );

  return [notes, setNotes];
}
