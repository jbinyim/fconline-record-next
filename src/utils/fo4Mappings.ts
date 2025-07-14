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
      return "GK";
    case 1:
      return "SW";
    case 2:
      return "RWB";
    case 3:
      return "RB";
    case 4:
      return "RCB";
    case 5:
      return "CB";
    case 6:
      return "LCB";
    case 7:
      return "LB";
    case 8:
      return "LWB";
    case 9:
      return "RDM";
    case 10:
      return "CDM";
    case 11:
      return "LDM";
    case 12:
      return "RM";
    case 13:
      return "RCM";
    case 14:
      return "CM";
    case 15:
      return "LCM";
    case 16:
      return "LM";
    case 17:
      return "RAM";
    case 18:
      return "CAM";
    case 19:
      return "LAM";
    case 20:
      return "RF";
    case 21:
      return "CF";
    case 22:
      return "LF";
    case 23:
      return "RW";
    case 24:
      return "RS";
    case 25:
      return "ST";
    case 26:
      return "LS";
    case 27:
      return "LW";
    case 28:
      return "SUB";
    default:
      return "";
  }
};

const fo4Mappings = { getDivision, getDivisionImg, getMatchType, getSpposition };
export default fo4Mappings;
