import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { isEmptyObj } from "@/utils";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import { changeHeaderConfigAction } from "@/store/modules/main";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeLongFor from "./c-cpns/home-longfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";

const Home = memo(() => {
  const dispatch = useDispatch();

  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendInfo,
    longForInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchHomeDataAction("xxxx"));
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }));
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyObj(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyObj(hotRecommendInfo) && (
          <HomeSectionV2 infoData={discountInfo} />
        )}
        {isEmptyObj(longForInfo) && <HomeLongFor infoData={longForInfo} />}
        {isEmptyObj(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo} />
        )}
        {isEmptyObj(highScoreInfo) && (
          <HomeSectionV1 infoData={highScoreInfo} />
        )}
        {isEmptyObj(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
      <div className="text"></div>
    </HomeWrapper>
  );
});

export default Home;
