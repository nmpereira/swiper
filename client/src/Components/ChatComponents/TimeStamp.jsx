import { useEffect, useState } from "react";

function TimeStamp(props) {
  const [time, setTime] = useState(Date.now());

  const convertTime = (time) => {
    // convert time to timestamp if today, else date and time if not today

    const today = new Date();
    const messageTime = new Date(time);
    const timeDiff = today - messageTime;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutesDiff = Math.floor(timeDiff / (1000 * 60));
    const secondsDiff = Math.floor(timeDiff / 1000);

    if (daysDiff === 0) {
      if (hoursDiff === 0) {
        if (minutesDiff === 0) {
          return secondsDiff > 1
            ? `${secondsDiff} seconds ago`
            : `${secondsDiff} second ago`;
        } else {
          return minutesDiff > 1
            ? `${minutesDiff} minutes ago`
            : `${minutesDiff} minute ago`;
        }
      } else {
        return hoursDiff > 1
          ? `${hoursDiff} hours ago`
          : `${hoursDiff} hour ago`;
      }
    } else {
      return `${messageTime.toLocaleDateString()} ${messageTime.toLocaleTimeString()}`;
    }
  };

  return convertTime(props.time);
}

export default TimeStamp;
