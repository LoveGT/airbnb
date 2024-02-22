import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo(function EntireFilter(props) {
  const [selectItems, setSelectItems] = useState([]);

  const itemClickHandle = (item) => {
    const newItems = [...selectItems];
    
    if (newItems.includes(item)) {// 移除操作
      const itemIndex = newItems.findIndex(filterItem => filterItem === item)
      newItems.splice(itemIndex, 1)
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  };
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={() => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
