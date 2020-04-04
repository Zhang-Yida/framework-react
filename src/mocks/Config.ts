// https://reacttraining.com/react-router/web/example/route-config

export interface IMenuBase {
  path: string
  component?: string
  label?: string
  icon?: string
}

export interface IMenu extends IMenuBase {
  // children?: IMenuBase[]
  children?: Array<IMenuBase | IMenu>
}

const menuMock: IMenu[] = [
  { path: '/dashboard', component: 'Dashboard', label: '首页' },
  {
    path: '/system',
    label: '系统管理',
    children: [
      { path: '/system/user/list', component: 'SystemUserList', label: 'User' },
      {
        path: '/system/office/list',
        component: 'SystemOfficeList',
        label: 'Office',
        children: [
          {
            path: '/system/office/list/child',
            component: 'SystemOfficeList',
            label: 'Child',
          },
        ],
      },
    ],
  },
]

export default menuMock
