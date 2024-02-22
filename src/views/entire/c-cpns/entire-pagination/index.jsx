import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";
import PropTypes from "prop-types";
import { PaginationWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  changeCurrentPageAction,
  fetchRoomListAction,
} from "@/store/modules/entire/createActions";

const EntirePagination = memo(function EntirePagination(props) {
  const { currentPage, roomList, totalCount } = useSelector((state) => ({
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
  }), shallowEqual);

  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;

  const dispatch = useDispatch();
  const pageChangeHandle = (event, pageCount) => {
    // dispatch(changeCurrentPageAction(pageCount -1))
    window.scrollTo(0, 0)
    dispatch(fetchRoomListAction(pageCount - 1));
  };
  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <>
          <Pagination count={totalPage} color="primary" onChange={pageChangeHandle} />
          <div className="desc">第{startCount}-{endCount}个房源，共超过{totalCount}</div>
        </>
      )}
    </PaginationWrapper>
  );
});

EntirePagination.propTypes = {};

export default EntirePagination;
