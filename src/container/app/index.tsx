/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-25
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-25
 */
import React from "react";
import Header from "../../component/common/header";
import Footer from "../../component/common/footer";
import {Container, Content, Section} from "./style";
import NavigatorList from "../../component/common/navigator";
import Main from "../../component/common/main";

const App = () => (
    <Container>
      <Header />
      <Section>
        <Content>
          <NavigatorList>asd</NavigatorList>
          <Main>Main content</Main>
        </Content>
      </Section>
      <Footer />
    </Container>
  );


export default App;
