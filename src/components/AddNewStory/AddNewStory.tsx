import { useState } from "react";
import { Button } from "antd";

import "./styles.css";
import NewStoryModal from "./NewStoryModal";
import { PlusIcon } from "@/assets/svg";

const AddNewStory = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCreateNewStory = (storyData: any) => {
    console.log("New story created:", storyData);
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button
        className="new-story-btn"
        type="primary"
        icon={<PlusIcon />}
        onClick={() => setIsModalVisible(true)}
      >
        New Story
      </Button>

      <NewStoryModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onCreate={handleCreateNewStory}
      />
    </div>
  );
};

export default AddNewStory;
