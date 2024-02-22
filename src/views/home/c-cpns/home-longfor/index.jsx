import React, { memo } from "react";
import PropTypes from "prop-types";
import { HomeLongForWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import LongForItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeLongFor = memo(function (props) {
  const { infoData } = props;
  return (
    <HomeLongForWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongForItem itemData={item} key={item.city} />;
          })}
        </ScrollView>
      </div>
    </HomeLongForWrapper>
  );
});

HomeLongFor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLongFor;
