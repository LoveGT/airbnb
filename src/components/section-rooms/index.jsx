import React, { memo } from "react";
import PropTypes from "prop-types";
import RoomItem from "../room-item";
import { RoomsWrapper } from "./style";

const SectionRooms = memo(function (props) {
  const { roomList = [], itemwidth } = props;
  return (
    <RoomsWrapper className="room-list">
      {roomList?.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} key={item.id} itemwidth={itemwidth} />;
      })}
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
