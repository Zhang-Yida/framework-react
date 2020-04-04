import React from 'react'

type IProps = {}
type IStates = {
  date: Date
}

class Clock extends React.Component<IProps, IStates> {
  // eslint-disable-next-line react/sort-comp
  timerId: number

  constructor(props: IProps) {
    super(props)
    this.timerId = 0
    this.state = { date: new Date() }
  }
  // life cycle
  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }
}

export default Clock
