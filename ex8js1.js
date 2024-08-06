const { createApp } = Vue;
//iife 안쓰고 진행
createApp({
  data() {
    return {
      key: "key! ",
      key2: "key!!",
      message: "안녕하세요",
      htmlString: '<p style="color:blue">🧶파란색?</p>',
      su1: "0",
      su2: "0",
      naverlogo:
        "https://t1.daumcdn.net/daumtop_deco/images/pctop/2023/logo_daum.png",
    };
  },
  methods: {
    myFunc() {
      console.log(this.message);
    },
    myChange1() {
      this.message = "안녕";
    },
    myChange2() {
      this.message = "반가워";
    },
  },
}).mount("#app");
