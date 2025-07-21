const getDivision = (division: number) => {
  switch (division) {
    case 800:
      return "슈퍼챔피언스";
    case 900:
      return "챔피언스";
    case 1000:
      return "슈퍼챌린지";
    case 1100:
      return "챌린지1";
    case 1200:
      return "챌린지2";
    case 1300:
      return "챌린지3";
    case 2000:
      return "월드클래스1";
    case 2100:
      return "월드클래스2";
    case 2200:
      return "월드클래스3";
    case 2300:
      return "프로1";
    case 2400:
      return "프로2";
    case 2500:
      return "프로3";
    case 2600:
      return "세미프로1";
    case 2700:
      return "세미프로2";
    case 2800:
      return "세미프로3";
    case 2900:
      return "유망주1";
    case 3000:
      return "유망주2";
    case 3100:
      return "유망주3";
  }
};

const getDivisionImg = (division: number) => {
  switch (division) {
    case 800:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank0.png";
    case 900:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank1.png";
    case 1000:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank2.png";
    case 1100:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank3.png";
    case 1200:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank4.png";
    case 1300:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank5.png";
    case 2000:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank6.png";
    case 2100:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank7.png";
    case 2200:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank8.png";
    case 2300:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank9.png";
    case 2400:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank10.png";
    case 2500:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank11.png";
    case 2600:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank12.png";
    case 2700:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank13.png";
    case 2800:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank14.png";
    case 2900:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank15.png";
    case 3000:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank16.png";
    case 3100:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank17.png";
    default:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank_default.png";
  }
};

const getMatchType = (toggle: number) => {
  switch (toggle) {
    case 50:
      return "공식경기";
    case 52:
      return "감독모드";
    case 214:
      return "볼타모드";
    case 60:
      return "친선경기";
  }
};

const getSpposition = (spposition: number) => {
  switch (spposition) {
    case 0:
      return {
        name: "GK",
        class: {
          home: "z-10 top-[1%] left-[50%] translate-x-[-50%] translate-y-[-1%]",
          away: "z-10 top-[96%] left-[50%] translate-x-[-50%] translate-y-[-96%]",
        },
      };
    case 1:
      return {
        name: "SW",
        class: {
          home: "z-10 top-[12%] left-[50%] translate-x-[-50%] translate-y-[-12%]",
          away: "z-10 top-[87%] left-[50%] translate-x-[-50%] translate-y-[-87%]",
        },
      };
    case 2:
      return {
        name: "RWB",
        class: {
          home: "z-10 top-[16%] left-[10%] translate-x-[-10%] translate-y-[-16%]",
          away: "z-10 top-[84%] left-[90%] translate-x-[-90%] translate-y-[-84%]",
        },
      };
    case 3:
      return {
        name: "RB",
        class: {
          home: "z-10 top-[10%] left-[10%] translate-x-[-10%] translate-y-[-10%]",
          away: "z-10 top-[90%] left-[90%] translate-x-[-90%] translate-y-[-90%]",
        },
      };
    case 4:
      return {
        name: "RCB",
        class: {
          home: "z-10 top-[10%] left-[30%] translate-x-[-30%] translate-y-[-10%]",
          away: "z-10 top-[90%] left-[70%] translate-x-[-70%] translate-y-[-90%]",
        },
      };
    case 5:
      return {
        name: "CB",
        class: {
          home: "z-10 top-[8%] left-[50%] translate-x-[-50%] translate-y-[-8%]",
          away: "z-10 top-[90%] left-[50%] translate-x-[-50%] translate-y-[-90%]",
        },
      };
    case 6:
      return {
        name: "LCB",
        class: {
          home: "z-10 top-[10%] left-[70%] translate-x-[-70%] translate-y-[-10%]",
          away: "z-10 top-[90%] left-[30%] translate-x-[-30%] translate-y-[-90%]",
        },
      };
    case 7:
      return {
        name: "LB",
        class: {
          home: "z-10 top-[10%] left-[90%] translate-x-[-90%] translate-y-[-10%]",
          away: "z-10 top-[90%] left-[10%] translate-x-[-10%] translate-y-[-90%]",
        },
      };
    case 8:
      return {
        name: "LWB",
        class: {
          home: "z-10 top-[16%] left-[90%] translate-x-[-90%] translate-y-[-16%]",
          away: "z-10 top-[84%] left-[10%] translate-x-[-10%] translate-y-[-84%]",
        },
      };
    case 9:
      return {
        name: "RDM",
        class: {
          home: "z-10 top-[18%] left-[40%] translate-x-[-40%] translate-y-[-18%]",
          away: "z-10 top-[83%] left-[60%] translate-x-[-60%] translate-y-[-83%]",
        },
      };
    case 10:
      return {
        name: "CDM",
        class: {
          home: "z-10 top-[18%] left-[50%] translate-x-[-50%] translate-y-[-18%]",
          away: "z-10 top-[83%] left-[50%] translate-x-[-50%] translate-y-[-83%]",
        },
      };
    case 11:
      return {
        name: "LDM",
        class: {
          home: "z-10 top-[18%] left-[60%] translate-x-[-60%] translate-y-[-18%]",
          away: "z-10 top-[83%] left-[40%] translate-x-[-40%] translate-y-[-83%]",
        },
      };
    case 12:
      return {
        name: "RM",
        class: {
          home: "z-10 top-[25%] left-[10%] translate-x-[-10%] translate-y-[-25%]",
          away: "z-10 top-[76%] left-[90%] translate-x-[-90%] translate-y-[-76%]",
        },
      };
    case 13:
      return {
        name: "RCM",
        class: {
          home: "z-10 top-[25%] left-[30%] translate-x-[-30%] translate-y-[-25%]",
          away: "z-10 top-[76%] left-[70%] translate-x-[-70%] translate-y-[-76%]",
        },
      };
    case 14:
      return {
        name: "CM",
        class: {
          home: "z-10 top-[25%] left-[50%] translate-x-[-50%] translate-y-[-25%]",
          away: "z-10 top-[76%] left-[50%] translate-x-[-50%] translate-y-[-76%]",
        },
      };
    case 15:
      return {
        name: "LCM",
        class: {
          home: "z-10 top-[25%] left-[70%] translate-x-[-70%] translate-y-[-25%]",
          away: "z-10 top-[76%] left-[30%] translate-x-[-30%] translate-y-[-76%]",
        },
      };
    case 16:
      return {
        name: "LM",
        class: {
          home: "z-10 top-[25%] left-[90%] translate-x-[-90%] translate-y-[-25%]",
          away: "z-10 top-[76%] left-[10%] translate-x-[-10%] translate-y-[-76%]",
        },
      };
    case 17:
      return {
        name: "RAM",
        class: {
          home: "z-10 top-[32%] left-[20%] translate-x-[-20%] translate-y-[-32%]",
          away: "z-10 top-[69%] left-[80%] translate-x-[-80%] translate-y-[-69%]",
        },
      };
    case 18:
      return {
        name: "CAM",
        class: {
          home: "z-10 top-[32%] left-[50%] translate-x-[-50%] translate-y-[-32%]",
          away: "z-10 top-[69%] left-[50%] translate-x-[-50%] translate-y-[-69%]",
        },
      };
    case 19:
      return {
        name: "LAM",
        class: {
          home: "z-10 top-[32%] left-[80%] translate-x-[-80%] translate-y-[-32%]",
          away: "z-10 top-[69%] left-[20%] translate-x-[-20%] translate-y-[-69%]",
        },
      };
    case 20:
      return {
        name: "RF",
        class: {
          home: "z-10 top-[39%] left-[30%] translate-x-[-30%] translate-y-[-39%]",
          away: "z-10 top-[62%] left-[70%] translate-x-[-70%] translate-y-[-62%]",
        },
      };
    case 21:
      return {
        name: "CF",
        class: {
          home: "z-10 top-[39%] left-[50%] translate-x-[-50%] translate-y-[-39%]",
          away: "z-10 top-[62%] left-[50%] translate-x-[-50%] translate-y-[-62%]",
        },
      };
    case 22:
      return {
        name: "LF",
        class: {
          home: "z-10 top-[39%] left-[70%] translate-x-[-70%] translate-y-[-39%]",
          away: "z-10 top-[62%] left-[30%] translate-x-[-30%] translate-y-[-62%]",
        },
      };
    case 23:
      return {
        name: "RW",
        class: {
          home: "z-10 top-[39%] left-[10%] translate-x-[-10%] translate-y-[-39%]",
          away: "z-10 top-[62%] left-[90%] translate-x-[-90%] translate-y-[-62%]",
        },
      };
    case 24:
      return {
        name: "RS",
        class: {
          home: "z-10 top-[46%] left-[30%] translate-x-[-30%] translate-y-[-46%]",
          away: "z-10 top-[54%] left-[70%] translate-x-[-70%] translate-y-[-54%]",
        },
      };
    case 25:
      return {
        name: "ST",
        class: {
          home: "z-10 top-[46%] left-[50%] translate-x-[-50%] translate-y-[-46%]",
          away: "z-10 top-[54%] left-[50%] translate-x-[-50%] translate-y-[-54%]",
        },
      };
    case 26:
      return {
        name: "LS",
        class: {
          home: "z-10 top-[46%] left-[70%] translate-x-[-70%] translate-y-[-46%]",
          away: "z-10 top-[54%] left-[30%] translate-x-[-30%] translate-y-[-54%]",
        },
      };
    case 27:
      return {
        name: "LW",
        class: {
          home: "z-10 top-[39%] left-[90%] translate-x-[-90%] translate-y-[-39%]",
          away: "z-10 top-[62%] left-[10%] translate-x-[-10%] translate-y-[-62%]",
        },
      };
    case 28:
      return {
        name: "SUB",
        class: {
          home: "hidden",
          away: "hidden",
        },
      };

    default:
      return "";
  }
};

const getGradeColor = (grade: number) => {
  if (grade === 1) {
    return "text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]";
  } else if (grade >= 2 && grade <= 4) {
    return "text-[#7e3f27] font-bold border-[#864229] border bg-gradient-to-r from-[#de946b] to-[#ad5f42]";
  } else if (grade >= 5 && grade <= 7) {
    return "text-[#4e545e] font-bold border-[#a5a8ae] border bg-gradient-to-r from-[#d8d9dc] to-[#b8bdca]";
  } else if (grade >= 8 && grade <= 10) {
    return "text-[#695100] font-bold border-[#cda000] border bg-gradient-to-r from-[#f9dd62] to-[#dca908]";
  } else if (grade >= 11 && grade <= 13) {
    return "moreten text-[#2d2b43] font-bold border-[#5274c0] border";
  }
};

const fo4Mappings = { getDivision, getDivisionImg, getMatchType, getSpposition, getGradeColor };
export default fo4Mappings;
