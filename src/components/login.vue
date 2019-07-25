<template>
  <div class="login_wrap">
    <div class="content_bg">
      <div class="login_box">
        <div class="login_bg">
          <div class="user_header"> <img class='user_headerImg ' :src="decodeURIComponent(GetUrlParam('headimgurl'))" alt=""></div>
          <span class="user_name">
            <p>昵称:{{decodeURI(GetUrlParam('nickname'))}}</p>
          </span>
          <span class="user_ID">
             <p>UID:{{GetUrlParam('userId')}}</p> 
          </span>
          <div class="form md-example-child-input-item-2">
            <md-field style="background:none;;">
              <md-input-item ref="input0" title="手机号" type="phone" v-model="info.mobile" placeholder="请输入" class="tle">
              </md-input-item>
              <md-input-item ref="input1" title="短信验证码" type="number" v-model="info.captcha" placeholder="请输入"
                class="login_text">
                <a ref="sending" class="input-operator" style="color:#FFFFFF" slot="right" @click="getMsgCode"
                  v-if="!isSendMsg">{{sending}}</a>
                <a ref="sending" class="input-operator input_time" style="color:#FFFFFF" slot="right"
                  v-else>{{time}}s</a>
              </md-input-item>
            </md-field>
          </div>
          <button class="btn" @click="login">绑定</button>
          <p class="button_text" style="color:#fff;">验证成功后再电视上领取</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "",
    data() {
      return {
        time: 60,
        isSendMsg: false,
        info: {},
        sending:'获取验证码'
      };
    },
    methods: {
      // 登录
      login() {
        axios.post(`${this.baseURL}/api/v1/user/checkCaptcha`, {
          // info:this.info,
          mobile: this.info.mobile,
          captcha: this.info.captcha
        }).then(response => {
          if (response.data.errno == 10000) {
            this.$router.push({
              path: '/successfully'
            });
          } else {
            this.$toast({
              content: response.data.errmsg,
              position: 'bottom'
            })
          }
        }, response => { })
      },

      // 验证码发送倒计时
      msgCodeTime() {
        var interval = setInterval(() => {
          this.time -= 1;
          if (this.time <= 0) {
            clearInterval(interval);
            this.sending = '重新获取'
            this.isSendMsg = false;
            this.time = 60;
          }
        }, 1000);
      },
      //发送验证码
      getMsgCode() {
        if (this.isMsgCode() == true) {
          this.$toast({
            content: "请输入正确的手机号",
            position: "bottom"
          });
          return;
        }
        this.info.mobile *= 1;
        axios.post(`${this.baseURL}/api/v1/user/getCaptcha`, {
          userId: this.GetUrlParam('userId'),
          mobile: this.info.mobile,
          source: 1,
        }).then(response => {
          if(response.data.errno == 10001){
            this.$toast({
            content: "该号码已被绑定",
            position: "bottom"
          });
          return;
          }
          // if(response.data)
          this.isSendMsg = true;
          this.msgCodeTime();
          
        })
      },
      //验证手机号
      isMsgCode() {
        var reg = /^1[34578]\d{9}$/;
        return !reg.test(this.info.mobile);
      },
      isLogin() {
        if (this.info.mobile != "") {
          return false;
        }
        return true;
      },
      //头像昵称
      GetUrlParam(paraName) {
        var url = window.location.toString();
        var arrObj = url.split("?");

        if (arrObj.length > 1) {
          var arrPara = arrObj[1].split("&");
          var arr;

          for (var i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");

            if (arr != null && arr[0] == paraName) {
              return arr[1];
            }
          }
          return "";
        }
        else {
          return "";
        }
      }
    }
  };
</script>

<style lang="scss">
  .login_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .content_bg {
      flex: 1;
      background: #551824 url(../assets/bg_gdmb_ph.png) no-repeat;
      width: 100%;
      height: 120%;
      background-size: 100% 100%;
      // position: relative;
      left: 0;
      box-sizing: border-box;

      .login_box {
        position: absolute;
        left: 0;
        top: 4.6rem;
        z-index: 0;
        width: 100%;
        padding: 0 0.25rem;
        box-sizing: border-box;

        .login_bg {
          box-sizing: border-box;
          width: 100%;
          background: url(../assets/bg_gdmb_sgin.png) no-repeat;
          background-size: 100% 100%;
          border-radius: 0.04rem;
          padding: 0.45rem 0.25rem 0.25rem;
          z-index: 99;

          .user_headerImg {
            width: 0.8rem;
            height: 0.792rem;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            top: 0%;
            line-height: 0.792rem;
            text-align: center;
            border-radius: 50%;
            background: yellow;
            font-size: 0.16rem;
          }

          .user_name {
            width: 100%;
            height: 0.22rem;
            line-height: 0.22rem;
            font-size: 0.2rem;
            text-align: center;
            color: #fff;
          }

          .user_ID {
            display: inline-block;
            width: 100%;
            height: 0.22rem;
            line-height: 0.22rem;
            font-size: 0.14rem;
            text-align: center;
            color: #fff;
          }

          .login_text {
            color: #fff;

            .input-operator {
              position: absolute;
              right: 0;
              width: 1rem;
              color: #fff;
              font-size: 0.16rem;
            }

            .input_time {
              text-align: right;
            }
          }

          .tle {
            color: #fff;
          }

          .verification {
            font-size: 0.16rem;
            color: #ffffff;
          }

          .btn {
            width: 100%;
            height: 0.44rem;
            line-height: 0.44rem;
            font-size: 0.18rem;
            text-align: center;
            color: #6e1d26;
            border-radius: 0.04rem;
            background: #fff;
            border: 0;
          }

          .button_text {
            font-size: 0.16rem;
            text-align: center;
            padding-top: 0.07rem;
          }
        }
      }

    }

    label.md-field-item.is-solid.md-field-item-title {
      width: 22.33333vw !important;
    }

    label.md-field-item-title {
      flex-shrink: 0;
      margin-right: 1.33333vw;
      font-size: 0.14rem;
      line-height: 1.2;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 340px) {
    .login_wrap {
      .content_bg {
        .login_box {
          top: 0.4.8rem;
          padding: 0 0.15rem -0.05rem;

          .login_bg {
            padding: 0.3rem 0.15rem 0.15rem;

            .user_header {
              width: 0.6rem;
              height: 0.6rem;
              line-height: 0.6rem;
            }

            .user_name {
              font-size: 0.18rem;
              height: 0.2rem;
              line-height: 0.2rem;
            }

            .user_ID {
              font-size: 0.12rem;
              height: 0.12rem;
              line-height: 0.12rem;
            }

            .btn {
              height: 0.35rem;
              line-height: 0.35rem;
              font-size: 0.16rem;
              margin-top: 0.15rem;
            }
          }
        }
      }
    }
  }
</style>