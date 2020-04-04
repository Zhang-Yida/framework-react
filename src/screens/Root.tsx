import React from 'react'
import { Layout } from 'antd'
import SkSider from '../components/UI/SKSider'
import SkRoutes from '../routes/SkRoutes'
import styles from '../styles/Root.module.less'

import menuData from '../mocks/Config'

const { Header, Sider, Content, Footer } = Layout
class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Sider className={styles.sider}>
          <SkSider menuData={menuData} />
        </Sider>
        <Layout>
          <Header />
          <Content>
            <SkRoutes />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}

export default Home
