import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout,  theme } from 'antd';
const { Header } = Layout;

export default function LayoutHeader({collapsed, onCollapse}) {
  const { token: { colorBgContainer, }, } = theme.useToken();
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => onCollapse(!collapsed)} style={{ fontSize: '16px', width: 64, height: 64 }} />
    </Header>
  )
}
