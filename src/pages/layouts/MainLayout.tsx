import { Layout } from 'antd';
import { ReactNode } from 'react';
import { AppHeader } from 'src/components/Header';
import { AppFooter } from 'src/components/Footer';
import { AppAlert } from 'src/components/Alert';
const { Header, Content, Footer } = Layout;

interface mainLayoutProps {
  children: ReactNode;
}
export const MainLayout = (props: mainLayoutProps) => {
  const { children } = props;
  return (
    <Layout className="main-layout">
      <Header>
        <AppHeader />
      </Header>
      <Content className="layout-children">
        <AppAlert />
        {children}
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};
