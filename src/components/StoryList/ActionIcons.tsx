import { Button } from "antd";

import { DeleteIcon, EditIcon } from "@/assets/svg";

const ActionIcons = ({ onEdit, onDelete, record }) => {
  return (
    <div className="flex gap-5">
      <Button icon={<DeleteIcon />} onClick={() => onDelete(record)} danger />
      <Button
        icon={
          <div className="flex items-center justify-center">
            <EditIcon />
          </div>
        }
        onClick={() => onEdit(record)}
        className="edit-btn"
      >
        Edit
      </Button>
    </div>
  );
};

export default ActionIcons;
