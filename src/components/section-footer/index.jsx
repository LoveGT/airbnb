import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { FooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo(function (props) {
  const { name } = props;
  let showMessage = "";
  if (name) {
    showMessage = `显示更多${name}房源`;
  } else {
    showMessage = `显示全部房源`;
  }
  const navigate = useNavigate()
  const moreClickHandle = () => {
    navigate("/entire")
  }
  return (
    <FooterWrapper color={name ?'#00848a' : '#000'}>
      <div className="info" onClick={moreClickHandle}>
        <div className="text">{showMessage}</div>
        <div className="icon">
          <IconMoreArrow />
        </div>
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
