import NextLink from "next/link";
import { Layout, Space } from "antd";

const { Header, Content } = Layout;

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <Header className="header">
        <Space wrap size={"large"}>
          <NextLink href="/messages" className="header_item">Messages</NextLink>
          <NextLink href="/numbers" className="header_item">Numbers</NextLink>
        </Space>
      </Header>
      <Content className="content">{children}</Content>
    </Layout>
  );
};
