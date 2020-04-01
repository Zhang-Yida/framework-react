// https://reacttraining.com/react-router/web/example/route-config

export interface IMenuBase {
  path: string
  component?: string
}

export interface IMenu extends IMenuBase {
  children?: IMenuBase[]
}

const menuMock: IMenu[] = [
  { path: '/dashboard', component: 'Dashboard' },
  {
    path: '/system',
    children: [
      { path: '/system/user/list', component: 'SystemUserList' },
      { path: '/system/office/list', component: 'SystemOfficeList' },
    ],
  },
]

export default menuMock
