import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PageComponents from '../screens'
import menuData, { IMenu, IMenuBase } from '../mocks/Config'
class SkRoutes extends React.Component {
  // 不包含子路由
  parseRoute = (route: IMenuBase) => {
    const { path, component } = route
    const Component = component && PageComponents[component]
    return (
      <Route exact path={path} key={component}>
        <Component />
      </Route>
    )
  }
  // 包含子路由
  parseSubRoute = (route: IMenu): any => {
    return (route.children || []).map((child: IMenu) =>
      (child.children || []).length > 0
        ? this.parseSubRoute(child)
        : this.parseRoute(child)
    )
  }
  // 路由工厂
  routesFactory = (route: IMenu) => {
    if ('children' in route) {
      return this.parseSubRoute(route)
    } else {
      return this.parseRoute(route)
    }
  }
  render() {
    return <Switch>{menuData.map(this.routesFactory)}</Switch>
  }
}

export default SkRoutes
