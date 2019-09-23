import React from 'react'
import { Menu, Icon,Tabs,Breadcrumb,Select,Button,Table } from 'antd'
import { Link } from 'react-router'
import './approve.less'
const TabPane = Tabs.TabPane;
const Option = Select.Option;
import components from '../../components/index'

class Approve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      panes : [
        { title: '请假', type: 'qj', key: '1' },
        { title: '加班', type: 'jb', key: '2' },
        { title: '报销', type: 'bx', key: '3' },
        { title: '出差', type: 'cc', key: '4' },
        { title: '外出', type: 'wc', key: '5' },
        { title: '物品', type: 'wp', key: '6' },
      ]
    }
  }

  callback =(key) => {
    console.log(key);
  }

  render() {
    return (
       <div className="approve-container">
        <div className="breadcrumb">
          <Breadcrumb separator=">">
            <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
            <Breadcrumb.Item href="">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="">审批管理</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="tab">
        <Tabs onChange={this.callback} type="card">
          {
            this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>
              <components.Tab type={pane.type}/>
            </TabPane>
            )
          }
        </Tabs>
        </div>
        {this.props.children}
       </div>
    )
  }
}

export default Approve

