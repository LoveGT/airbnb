import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  z-index: 99;
  display: flex;
  flex-direction: column;
  .top {
    position: relative;
    height: 86px;
    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }
  .slider {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
      .right {
        right: 40px;
      }
    }
    .pictures {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;
      img {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        user-select: none;
        height: 100%;
      }

      /* 动画的样式 */
      .pic-enter {
        transform: translate(${(props) => (props.isNext ? "100%" : "-100%")});
        opacity: 0;
      }
      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }
      .pic-exit {
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
      }
    }
  }
  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;
    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;
      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${(props) => (props.showList ? "67px" : "0")};
          /* height: 67px; */
        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
