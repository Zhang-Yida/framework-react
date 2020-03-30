import React from 'react'
import { Link } from 'react-router-dom'

import { Layout, Menu } from 'antd'
import Clock from './components/Clock'

import styles from './styles/Home.module.less'

const { Header, Sider, Content, Footer } = Layout
class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Sider className={styles.sider}></Sider>
        <Layout>
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Home
