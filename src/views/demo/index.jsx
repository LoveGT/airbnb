import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import Indicator from "@/base-ui/indicator";
import { DemoWrapper } from "./style";

const Demo = memo(function Demo(props) {
  const names = [12, 13, 14, 15, 16, 17, "唐玉叶"];

  const [selectIndex, setSelectIndex] = useState(0);
  const toggleClickHandle = (isNext = true) => {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = names.length - 1;
    if (newIndex > names.length - 1) newIndex = 0;

    setSelectIndex(newIndex)
  };

  return (
    <DemoWrapper>
      <div className="control">
        <div onClick={(e) => toggleClickHandle(false)}>上一个</div>
        <div onClick={(e) => toggleClickHandle(true)}>下一个</div>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {names.map((item) => {
            return <button>{item}</button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

Demo.propTypes = {};

export default Demo;
