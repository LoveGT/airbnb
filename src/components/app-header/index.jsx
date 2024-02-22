import React, { memo, useEffect, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";

import { HeaderWrapper, SearchAreaWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left";
import HeaderCenter from "./c-cpns/header-center";
import HeaderRight from "./c-cpns/header-right";
import { useScrollPosition } from "@/hooks";

const AppHeader = memo((props) => {
  // 定義是否处于搜索状态
  const [isSearch, setIsSearch] = useState(false);

  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed, topAlpha } = headerConfig;

  // 监听滚动
  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);
  // 正常滚动时 记录ScrollY的值
  if (!isSearch) {
    prevY.current = scrollY;
  }
  // 弹出搜索功能且滚动距离大于弹出前位置的30时 关闭搜索弹窗
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false);

  /** 顶部透明度的逻辑 */
  const isAlpha = topAlpha && scrollY === 0;
  // console.log(scrollY)
  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={(e) => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch}></SearchAreaWrapper>
        </div>
        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
