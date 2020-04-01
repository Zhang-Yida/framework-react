import React from 'react'
import { Layout } from 'antd'
import SkRoutes from '../routes/SkRoutes'
import styles from '../styles/Root.module.less'

const { Header, Sider, Content, Footer } = Layout
class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Sider className={styles.sider} />
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
