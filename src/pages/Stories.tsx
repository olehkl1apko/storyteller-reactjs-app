import { FC } from "react";
import { Space, Typography } from "antd";

import { StoryList } from "@/components";

const Stories: FC = () => {
  return (
    <Space size={16} direction="vertical">
      <Typography.Title
        style={{
          fontSize: "30px",
          fontWeight: 700,
          lineHeight: 1.2,
          color: "#171a25",
          marginBottom: 0,
        }}
      >
        Stories
      </Typography.Title>
      <StoryList />
    </Space>
  );
};

export default Stories;
