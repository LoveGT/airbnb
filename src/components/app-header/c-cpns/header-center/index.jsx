import React, { memo, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { CenterWrapper } from "./style";
import IconSearchBar from "@/assets/svg/icon-search-bar";
import SearchTitles from "@/assets/data/search_titles";
import SearchSections from "./c-cpns/search-sections";
import SearchTabs from "./c-cpns/search-tabs";
const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const titles = SearchTitles.map((item) => item.title);

  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick();
  }

  return (
    // <CenterWrapper>
    //   {!isSearch ? (
    //     <div className="search-bar" onClick={searchBarClickHandle}>
    //       <div className="text">搜索房源和体验</div>
    //       <span className="icon">
    //         <IconSearchBar />
    //       </span>
    //     </div>
    //   ) : (
    //     <div className="search-detail">
    //       <SearchTabs titles={titles} tabClick={setTabIndex} />
    //       <div className="infos">
    //         <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
    //       </div>
    //     </div>
    //   )}
    // </CenterWrapper>
    <CenterWrapper>
      <CSSTransition in={!isSearch} timeout={250} unmountOnExit={true} classNames={'bar'}>
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">搜索房源和体验</div>
          <span className="icon">
            <IconSearchBar />
          </span>
        </div>
      </CSSTransition>
      <CSSTransition in={isSearch} timeout={250} unmountOnExit={true} classNames={'detail'}>
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
