import {createGlobalStyle} from "styled-components";

export const IconfontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1582731869158'); /* IE9 */
    src: url('iconfont.eot?t=1582731869158#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('iconfont.woff?t=1582731869158') format('woff'),
    url('iconfont.ttf?t=1582731869158') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1582731869158#iconfont') format('svg'); /* iOS 4.1- */
  }
  
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .icon-headway:before {
    content: "\\e62c";
  }
  
  .icon-headway1:before {
    content: "\\e61c";
  }
  
  .icon-xihuan_weixuanze:before {
    content: "\\e723";
  }
  
  .icon-sousuo_weixuanze:before {
    content: "\\e724";
  }
  
  .icon-wode_weixuanze:before {
    content: "\\e725";
  }
  
  .icon-shangyishouweidianji:before {
    content: "\\e727";
  }
  
  .icon-tianjiabukedian:before {
    content: "\\e728";
  }
  
  .icon-bofangliebiao:before {
    content: "\\e729";
  }
  
  .icon-xiayishouweidianji:before {
    content: "\\e72a";
  }
  
  .icon-lianjiezhong:before {
    content: "\\e72b";
  }
  
  .icon-shuaxin:before {
    content: "\\e72c";
  }
`;
