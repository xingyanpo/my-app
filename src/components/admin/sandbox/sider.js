import { Layout, Menu } from 'antd';
const { Sider } = Layout;
export default function LayoutSider({ collapsed, items }) {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className='overflow-y-auto h-screen'>
      <div className="demo-logo-vertical text-white py-3 pl-7 h-9 overflow-hidden" >{!collapsed ? 'NB Company' : "NB"}</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} >
      </Menu>
    </Sider>
  )
}
