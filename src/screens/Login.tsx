import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import styles from '../styles/Login.module.less'
import { RouteComponentProps } from 'react-router-dom'

const { Item } = Form

interface IProps extends RouteComponentProps {}
type IStates = {}

class Login extends React.Component<IProps, IStates> {
  onFinish = () => {
    console.log('Success:')
    this.props.history.push('/')
  }

  onFinishFailed = () => {
    console.log('Failed:')
  }

  render() {
    return (
      <div className={styles.loginWrapper}>
        <Form
          className={styles.loginForm}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Item
            name="username"
            rules={[{ required: true, message: 'please insert' }]}
          >
            <Input placeholder="Username" />
          </Item>
          <Item
            name="password"
            rules={[{ required: true, message: 'please insert' }]}
          >
            <Input.Password placeholder="Password" />
          </Item>
          <Item>
            <Checkbox>Remember me</Checkbox>
          </Item>
          <Item>
            <Button type="primary" block htmlType="submit">
              Submit
            </Button>
          </Item>
        </Form>
      </div>
    )
  }
}

export default Login
