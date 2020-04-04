import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { IMenu, IMenuBase } from '../../mocks/Config'

type IProps = {
  menuData: IMenu[]
}
type IStates = {}

const { SubMenu } = Menu
class SkSider extends React.Component<IProps, IStates> {
  parseSubMenu = (menu: IMenu) => {
    const { path, label, icon, children } = menu

    if (Array.isArray(children)) {
      return (
        <SubMenu title={label} key={path}>
          {children.map((child: IMenu) => {
            return this.menuFactory(child)
          })}
        </SubMenu>
      )
    }
  }
  parseMenu = (menu: IMenuBase) => {
    const { path, label, icon } = menu

    return (
      <Menu.Item key={path}>
        <Link to={path}>
          <span>{label}</span>
        </Link>
      </Menu.Item>
    )
  }
  menuFactory = (menu: IMenu) => {
    if ('children' in menu) {
      return this.parseSubMenu(menu)
    } else {
      return this.parseMenu(menu)
    }
  }
  handleMenuSelect = (menuItem: any) => {
    console.log(menuItem)
  }
  render() {
    const { menuData } = this.props
    return (
      <Menu mode="inline" onSelect={this.handleMenuSelect} theme="dark">
        {menuData.map(this.menuFactory)}
      </Menu>
    )
  }
}

export default SkSider
