import React from "react";
import { Input, Select } from "antd";

interface FiltersProps {
  searchQuery: string;
  selectedStatus: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleStatusChange: (value: string) => void;
  totalCount: number;
  filteredCount: number;
}

const Filters = ({
  searchQuery,
  selectedStatus,
  handleSearchChange,
  handleStatusChange,
  totalCount,
  filteredCount,
}: FiltersProps) => {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <Input
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-[22%] xs:w-[20%]"
      />

      <Select value={selectedStatus} onChange={handleStatusChange}>
        <Select.Option value="">All Statuses</Select.Option>
        <Select.Option value="Draft">Draft</Select.Option>
        <Select.Option value="Scheduled">Scheduled</Select.Option>
        <Select.Option value="Live">Live</Select.Option>
        <Select.Option value="Past">Past</Select.Option>
      </Select>
      <p className="hidden xs:block xs:text-sm xs:text-[#171a25] xs:whitespace-nowrap">
        {filteredCount} out of {totalCount} stories were found
      </p>
    </div>
  );
};

export default Filters;
