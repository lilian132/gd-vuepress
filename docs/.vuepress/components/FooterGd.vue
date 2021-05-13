<template>
  <div class="box">
    <div class="box-container">
      <img class="bottom-sign" src="./images/bottom-sign.png" alt="" />
      <div class="box-content">
        <div class="content-left">
          <div class="left-top">
            <img src="./images/logo-name.png" alt="" />
            <img src="./images/logo-x.png" alt="" />
            <img
              style="padding-right: 11px"
              src="./images/design-logo.png"
              alt=""
            />
            <span>G-Design</span>
          </div>
          <div class="team">出品团队：</div>
          <div class="describe">高灯公共支持部交互设计组&高灯云系统构架部</div>
          <div class="figure">
            <img src="./images/author1.png" alt="" />
            <img src="./images/author2.png" alt="" />
            <img src="./images/author3.png" alt="" />
            <img src="./images/author4.png" alt="" />
            <img src="./images/author5.png" alt="" />
            <img src="./images/author6.png" alt="" />
          </div>
          <img class="bottom-g" src="./images/bottom-g.png" alt="" />
        </div>
        <div class="content-center">
          <div class="contact">联系我们</div>
          <div class="feedback">设计问题反馈</div>
          <div class="email">
            <img src="./images/author1.png" alt="" />
            <span>nan.zhou@goldntec.com</span>
          </div>
          <div class="feedback" style="margin-top: 9px">技术问题反馈</div>
          <div class="email">
            <img src="./images/author5.png" alt="" />
            <span>chunjin.xu@goldntec.com</span>
          </div>
          <div class="email">
            <img src="./images/author6.png" alt="" />
            <span>free.li1@goldntec.com</span>
          </div>
        </div>
        <div class="content-right">
          <img src="./images/water-mark.png" alt="" />
          <div class="link">相关链接</div>
          <div class="golden">高灯科技</div>
          <div class="golden" style="margin-top: 0">高灯云</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.box {
  margin-top: 90px;
  height: 400px;
  background: #212122;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  position: relative;
  width: calc(100% + 80px);
  left: -40px;
  .bottom-sign {
    position: absolute;
    width: 381px;
    bottom: 0;
    left: 3px;
  }
  .box-container {
    height: 100%;
    margin: 0 auto;
    .box-content {
      box-sizing: border-box;
      padding-top: 64px;
      height: 100%;
      display: flex;
      .content-left {
        margin-left: 160px;
        .left-top {
          display: flex;
          align-items: center;
          font-size: 28px;
          font-weight: 600;
          color: #ffffff;
          img {
            padding-right: 16px;
          }
        }
        .team {
          margin-top: 32px;
          height: 28px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 28px;
        }
        .describe {
          height: 28px;
          color: #ffffff;
          line-height: 28px;
        }
        .figure {
          margin-top: 19px;
          display: flex;
          img {
            margin-right: 8px;
          }
        }
        .bottom-g {
          margin-left: 126px;
          margin-top: 6px;
        }
      }
      .content-center {
        margin-left: 283px;
        .contact {
          height: 37px;
          font-size: 18px;
          font-weight: 600;
          line-height: 37px;
        }
        .feedback {
          margin-top: 32px;
          height: 28px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 28px;
        }
        .email {
          margin-top: 9px;
          display: flex;
          align-items: center;
          img {
            margin-right: 9px;
          }
        }
      }
      .content-right {
        margin-left: 212px;
        position: relative;
        img {
          position: absolute;
          top: -41px;
          left: -183px;
        }
        .link {
          height: 37px;
          font-size: 18px;
          font-weight: 600;
          line-height: 37px;
        }
        .golden {
          margin-top: 32px;
          height: 28px;
          line-height: 28px;
        }
      }
    }
  }
}
</style>

