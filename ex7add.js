const { createApp } = Vue;

createApp({
  data() {
    return {
      list: ["와플", "우동", "밀크 티", "라면", ""],
      objArr: [
        { site: "대관령 휴게소", taketime: "3시간" },
        { site: "일본", taketime: "4시간" },
        { site: "대만", taketime: "6시간" },
        { site: "한강", taketime: "40분" },
      ],
      myArr: ["일", "이", "삼", "사", "오"],
      numArr: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    addList() {
      this.myArr.push("추가");
    },
    addListIndex(arg) {
      this.myArr.splice(arg, 0, "삽입"); //(지정위치, 삭제카운트 , 값)
    },
    changList(arg) {
      this.myArr.splice(arg, 1, "수정");
    },
    deleteList(arg) {
      this.myArr.splice(arg, 1);
    },
  },
}).mount("#app");
