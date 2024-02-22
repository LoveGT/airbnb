import React, { memo } from "react";
import PropTypes from "prop-types";

import { SectionV1Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const HomeSection = memo(function (props) {
  const { infoData  } = props
  return (
    <SectionV1Wrapper>
      <div>
        <SectionHeader title={infoData.title} />
        <SectionRooms roomList={infoData.list} />
        <SectionFooter />
      </div>
    </SectionV1Wrapper>
  );
});

HomeSection.propTypes = {
  infoData: PropTypes.object
};

export default HomeSection;
