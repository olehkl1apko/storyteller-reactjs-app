import { Pagination } from "antd";

const CustomPagination = ({
  currentPage,
  pageSize,
  total,
  onChange,
  onShowSizeChange,
}) => {
  return (
    <Pagination
      current={currentPage}
      pageSize={pageSize}
      total={total}
      onChange={onChange}
      showSizeChanger
      showQuickJumper
      onShowSizeChange={onShowSizeChange}
    />
  );
};

export default CustomPagination;
