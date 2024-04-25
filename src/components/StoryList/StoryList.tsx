import { Table } from "antd";
import { useState } from "react";

import "./styles.css";
import { dummyData } from "../../../dummyData";
import { formatDate, renderSubtitle } from "@/helpers";
import { useGetStories } from "@/hooks/useGetStories";
import { IStory } from "@/modules";
import ActionIcons from "./ActionIcons";
import CustomPagination from "./CustomPagination";
import ImagesList from "./ImagesList";
import StatusItem from "./StatusItem";
import Filters from "./Filters";

const StoryList = () => {
  const {
    // data,  // if you want to use fake data from mockApi but this data is not full
    error,
    loading,
  } = useGetStories();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const handleDelete = (record: IStory) => {
    console.log(`Delete record: ${record.id}`);
  };

  const handleEdit = (record: IStory) => {
    console.log(`Edit record: ${record.id}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  const filteredData = dummyData.filter((story) => {
    const matchesTitle = story.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus
      ? story.status === selectedStatus
      : true;
    return matchesTitle && matchesStatus;
  });

  const paginatedData: IStory[] = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  if (error) return <div>Something is wrong</div>;

  return (
    <div className="flex flex-col gap-6">
      <Filters
        searchQuery={searchQuery}
        selectedStatus={selectedStatus}
        handleSearchChange={handleSearchChange}
        handleStatusChange={handleStatusChange}
        totalCount={dummyData.length}
        filteredCount={filteredData.length}
      />
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
            render: (value) => <StatusItem value={value} />,
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
        total={filteredData.length}
        onChange={handlePageChange}
        onShowSizeChange={(current: number, size: number) =>
          handlePageChange(current, size)
        }
      />
    </div>
  );
};

export default StoryList;
