import styled from "styled-components";

export const RoomWrapper = styled.div`
  width: ${(props) => props.itemwidth};
  padding: 8px;
  flex-shrink: 0;
  .inner {
    width: 100%;
    cursor: pointer;
  }
  .cover {
    position: relative;
    /* padding: 0 8px; */
    padding: 66.66% 8px 0;
    /* aspect-ratio: 3/2; */
    border-radius: 3px;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .swiper {
    position: relative;
    cursor: pointer;
    &:hover {
      .control {
        display: flex;
      }
    }
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );

        &.right {
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
        }
      }
    }
  }
  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.verifycolor};
  }
  .indicator {
    position: absolute;
    bottom: 10px;
    z-index: 2;
    width: 30%;
    left: 0;
    right: 0;
    margin: 0 auto;
    .dot-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 14.29%;
      .dot {
        flex-shrink: 0;
        width: 6px;
        height: 6px;
        background-color: #fff;
        border-radius: 50%;

        &.active {
          width: 8px;
          height: 8px;
          background-color: ${props => props.theme.color.secondaryColor};
        }
      }
    }
  }
  .name {
    font-size: 16px;
    font-weight: 700;
    height: 38px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    padding: 8px 0;
  }
  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primaryColor};
    .count {
      margin: 0 2px 0 4px;
    }
    .MuiRating-decimal {
      margin-right: -2px;
    }
  }
`;
