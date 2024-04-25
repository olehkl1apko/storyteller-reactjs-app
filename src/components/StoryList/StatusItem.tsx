interface StatusItemProps {
  value: string;
}

const StatusItem = ({ value }: StatusItemProps) => {
  const statusClass =
    value === "Past"
      ? "bg-[#a3a3a3]"
      : value === "Live"
      ? "bg-[#1db56c]"
      : "bg-[#1c62eb]";

  return <span className={`status ${statusClass}`}>{value}</span>;
};

export default StatusItem;
