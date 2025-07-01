export type Colors = {
  /*
   * 主色，搜索框，重要按钮
   **/
  primary: string;
  /*
   * 主色2，搜索框，重要按钮
   **/
  primary2: string;

  /*
   * 按钮 hover
   **/
  primaryHover: string;

  /*
   * 块背景色
   **/
  bg: string;

  /*
   * 内容背景色
   **/
  bg2: string;

  /*
   * 上层背景
   **/
  bg3: string;

  /*
   * 功能分割线 G4
   **/
  divider: string;

  /*
   * 一级标题，一级文字
   **/
  text: string;

  /*
   * 二级文字，次要辅助文字
   **/
  text2: string;

  /*
   * 三级信息文字，次要辅助文字
   **/
  text3: string;
};

export const lightColors: Colors = {
  bg1: '#FFFFFF',
  bg2: '#FFFFFF',
  bg3: '#EFEFEF',
  divider: '#E8E8E8',
  primary: '#c70036',
  primary2: '#c70035d2',
  primaryHover: '#e70843',
  text1: '#232429',
  text2: '#4d4f54',
  text3: '#7F8087'
};

export const darkColors: Colors = {
  bg1: '#16161A',
  bg2: '#232429',
  bg3: '#2E2F34',
  divider: '#34353A',
  primary: '#c70036',
  primary2: '#c70035d2',
  primaryHover: '#e70843',
  text1: '#FAFAFA',
  text2: '#C0C1C4',
  text3: '#92949C'
};
