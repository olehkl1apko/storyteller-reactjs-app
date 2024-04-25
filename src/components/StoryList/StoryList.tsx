import { Table } from "antd";
import { useState } from "react";

import "./styles.css";
import { formatDate, renderSubtitle } from "@/helpers";
import { useGetStories } from "@/hooks/useGetStories";
import { IStory } from "@/modules";
import ActionIcons from "./ActionIcons";
import CustomPagination from "./CustomPagination";

import { dummyData } from "../../../dummyData";
import ImagesList from "./ImagesList";

const StoryList = () => {
  const { data, error, loading } = useGetStories();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);

  const handleDelete = (record) => {
    console.log(`Delete record: ${record.id}`);
  };

  const handleEdit = (record) => {
    console.log(`Edit record: ${record.id}`);
  };

  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  const paginatedData: IStory[] = dummyData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  if (error) return <div>Something is wrong</div>;

  return (
    <div className="flex flex-col gap-6">
      <Table
        loading={loading}
        style={{ width: "100%" }}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
            sorter: (a, b) => a.title.localeCompare(b.title),
            sortDirections: ["ascend", "descend"],
            render: (value, record) => (
              <div className="flex flex-col ">
                <span className="title">{value}</span>
                <span className="subtitle">
                  {`(${renderSubtitle(record.liveFrom, record.ends)})`}
                </span>
              </div>
            ),
          },
          {
            title: "Pages",
            dataIndex: "pages",
            render: (images) => <ImagesList images={images} />,
          },
          {
            title: "Last Modified",
            dataIndex: "lastModified",
            sorter: (a, b) => a.title.localeCompare(b.title),
            sortDirections: ["ascend"],
            render: (value) => (
              <span className="dates">{formatDate(value)}</span>
            ),
          },
          {
            title: "Status",
            dataIndex: "status",
            align: "center",
            sorter: (a, b) => a.title.localeCompare(b.title),
            sortDirections: ["ascend", "descend"],
            render: (value) => (
              <span
                className={`status ${
                  value === "Past"
                    ? "bg-[#a3a3a3]"
                    : value === "Live"
                    ? "bg-[#1db56c]"
                    : "bg-[#1c62eb]"
                }`}
              >
                {value}
              </span>
            ),
          },
          {
            title: "Live From",
            dataIndex: "liveFrom",
            sorter: (a, b) => a.title.localeCompare(b.title),
            sortDirections: ["ascend", "descend"],
            render: (value) => (
              <span className="dates">{formatDate(value)}</span>
            ),
          },
          {
            title: "Ends",
            dataIndex: "ends",
            sorter: (a, b) => a.title.localeCompare(b.title),
            sortDirections: ["ascend", "descend"],
            render: (value) => (
              <span className="dates">{formatDate(value)}</span>
            ),
          },
          {
            title: "",
            dataIndex: "actions",
            render: (_, record) => (
              <ActionIcons
                onEdit={handleEdit}
                onDelete={handleDelete}
                record={record}
              />
            ),
          },
        ]}
        dataSource={paginatedData}
        pagination={false}
      />
      <CustomPagination
        currentPage={currentPage}
        pageSize={pageSize}
        total={dummyData.length}
        onChange={handlePageChange}
        onShowSizeChange={(current, size) => handlePageChange(current, size)}
      />
    </div>
  );
};

export default StoryList;
