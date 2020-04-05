import React from 'react'
import axios from '../../axios'

class Dashboard extends React.Component {
  componentDidMount() {
    axios.post('/user/list').then((resp) => {
      console.log(resp)
    })
  }
  render() {
    return <div>Dashboard</div>
  }
}

export default Dashboard
