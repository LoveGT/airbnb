import React, { memo, useRef, useState } from "react";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import { Carousel } from "antd";
import { RoomWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo(function (props) {
  const { itemData, itemwidth = "25%", itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);

  const carouselRef = useRef();

  const controlClickHandle = (isRight = true, event) => {
    isRight ? carouselRef.current.next() : carouselRef.current.prev();
    // 指示器移动
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1;
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0;

    setSelectIndex(newIndex);
    // 阻止事件冒泡
    event.stopPropagation()
  };
  // 跳转详情
  const itemClickHandle = () => {
    if(itemClick) { //区分首页和entire页面的跳转
      itemClick(itemData)
    }
  }
  return (
    <RoomWrapper
      itemwidth={itemwidth}
      verifycolor={itemData?.verify_info.text_color || "#39576a"}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {itemData.picture_urls ? (
          <div className="swiper">
            <div className="control">
              <div
                className="btn left"
                onClick={(e) => controlClickHandle(false, e)}
              >
                <IconArrowLeft width="30" height="30" />
              </div>
              <div
                className="btn right"
                onClick={(e) => controlClickHandle(true, e)}
              >
                <IconArrowRight width="30" height="30" />
              </div>
            </div>
            <div className="indicator">
              <Indicator selectIndex={selectIndex}>
                {itemData?.picture_urls?.map((item, index) => {
                  return (
                    <div className="dot-item" key={index}>
                      <span
                        className={classNames("dot", {
                          active: selectIndex === index,
                        })}
                      ></span>
                    </div>
                  );
                })}
              </Indicator>
            </div>
            <Carousel dots={false} ref={carouselRef}>
              {itemData?.picture_urls?.map((item) => {
                return (
                  <div className="cover" key={item}>
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        ) : (
          <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>
        )}

        <div className="desc">{itemData.verify_info.messages.join(" . ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            name="half-rating"
            value={itemData.star_rating ?? 5}
            precision={0.1}
            sx={{ fontSize: "12px", color: "#00848a" }}
          />
          <span className="count">{itemData.reviews_count}</span>

          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </RoomWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
