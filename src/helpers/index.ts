import { format } from "date-fns";

export const formatDate = (timestamp: number | undefined) => {
  if (!timestamp) {
    return "--";
  }
  const date = new Date(timestamp * 1000);
  return format(date, "MMM dd, h:mm a");
};

export const renderSubtitle = (
  liveFrom: number | undefined,
  ends: number | undefined
) => {
  if (!liveFrom || !ends) {
    return "No publish date set";
  }

  const date = new Date(liveFrom * 1000);
  return format(date, "MMMM d");
};
