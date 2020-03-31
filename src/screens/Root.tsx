import React from 'react'
import { Layout, Menu } from 'antd'
import styles from '../styles/Root.module.less'

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
