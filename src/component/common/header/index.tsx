/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-26
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-26
 */

import React from "react";
import {HeaderContent} from "./style";

const HistoryNav = (props: any) => {
  return <div>
    <i className={'iconfont'}>&#xe62c;</i>
    <i className={'iconfont'}>&#xe61c;</i>
  </div>
};

const Header = () => {
  const back = () => console.log('back');
  const forward = () => console.log('forward');

  return <HeaderContent>
    <HistoryNav back={back} forward={forward} />
  </HeaderContent>
};

export default Header;
