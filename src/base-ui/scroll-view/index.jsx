import React, { memo, useEffect, useRef, useState } from "react";
import { ScrollWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = memo(function ScrollView(props) {
  // 定义内部的状态
  const [showRightBtn, setShowRightBtn] = useState(false);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef();

  // 组件渲染完毕判断是否显示右侧按钮
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 可滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth; //本身占据的宽度
    // 可滚动的距离
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;

    setShowRightBtn(totalDistance > 0);
  }, [props.children]);

  // 控制按钮事件处理
  const controlClickHandle = (isRight) => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newElOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`;
    setPosIndex(newIndex);
    // 是否继续显示右边按钮（totalDistance大于newElOffset才显示）
    setShowRightBtn(totalDistanceRef.current > newElOffsetLeft);
    // 左侧按钮显示
    setShowLeftBtn(newElOffsetLeft > 0);
  };
  // 左边按钮事件处理
  // const leftClickHandle= () => {
  //   const newIndex = posIndex -1
  //   const newEl = scrollContentRef.current.children[newIndex]
  //   const newElOffsetLeft = newEl.offsetLeft
  //   scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`
  //   setPosIndex(newIndex)
  //   // 是否继续显示右边按钮（totalDistance大于newElOffset才显示）
  //   setShowRightBtn(totalDistanceRef.current> newElOffsetLeft)
  //   // 左侧按钮显示
  //   setShowLeftBtn(newElOffsetLeft > 0)
  // }
  return (
    <ScrollWrapper>
      {showLeftBtn && (
        <div className="control left" onClick={() => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRightBtn && (
        <div className="control right" onClick={() => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  );
});


export default ScrollView;
