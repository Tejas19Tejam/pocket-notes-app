export function getAbbreviation(name) {
  const array = name.split(" ");

  if (array.length >= 2) return (array[0][0] + array[1][0]).toUpperCase();
  return (array[0][0] + " ").toUpperCase();
}

export function getDateAndTime() {
  const today = new Date();

  const month = today.toLocaleString("en-US", { month: "short" });

  const hours = today.getHours(); // Get hours in 24-hour format (0-23)
  const minutes = today.getMinutes(); // Get minutes (0-59)

  // Add leading zero for minutes if needed
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Convert to 12-hour format and add AM/PM suffix
  const amPm = hours >= 12 ? "PM" : "AM";

  const formattedHours = hours % 12 || 12; // Adjust hours for 12-hour format

  // Build and return the time string
  const time = `${formattedHours}:${formattedMinutes} ${amPm}`;

  // Build and return the date string
  const date = `${today.getDate()} ${month} ${today.getFullYear()}`;

  return [date, time];
}
