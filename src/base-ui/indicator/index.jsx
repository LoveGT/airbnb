import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo(function (props) {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();

  useEffect(() => {
    // 获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex];
    const itemElOffsetLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;

    // 获取content的宽度
    const contentWidth = contentRef.current.clientWidth;
    const contentScrollWidth = contentRef.current.scrollWidth;
    // 获取selectIndex移动的距离
    let distance = itemElOffsetLeft + itemWidth * 0.5 - contentWidth * 0.5;

    if (distance < 0) distance = 0; //左边指示器特殊情况处理
    const totalDistance = contentScrollWidth - contentWidth
    if (distance > totalDistance) distance = totalDistance //右边指示器特殊情况处理
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});


export default Indicator;
