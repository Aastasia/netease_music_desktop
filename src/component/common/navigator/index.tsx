/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-26
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-26
 */

import React from "react";
import {NavigatorListContent} from "./style";

const NavigatorList = (props: any) => {
  return <NavigatorListContent>{props.children}</NavigatorListContent>
};

export default NavigatorList;
