import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomLongForData,
  getHomePlusInfoData,
} from "@/services";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchData",
  async (param, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });

    // return res;
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
    getHomeHotRecommendData().then((res) => {
      dispatch(changeHotRecommendInfoAction(res));
    });
    getHomLongForData().then(res => {
      dispatch(changeLongForInfoAction(res))
    })
    getHomePlusInfoData().then(res => {
      dispatch(changePlusInfoAction(res))
    })
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longForInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload;
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload;
    },
    changePlusInfoAction(state, {payload}) {
      state.plusInfo = payload
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     console.log(payload, 1111);
  //     state.goodPriceInfo = payload;
  //   });
  // },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     console.log(payload)
  //     state.goodPriceInfo = payload
  //   }
  // }
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction
} = homeSlice.actions;
export default homeSlice.reducer;
