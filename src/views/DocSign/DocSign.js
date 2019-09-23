import React from 'react'
import { Menu, Icon,Tabs,Breadcrumb,Select,Button,Table } from 'antd'
import '../../style/DocSign.less'
const TabPane = Tabs.TabPane;
const Option = Select.Option;

const columns = [
  {
    title: '申请人',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '申请类型',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: '申请理由',
    dataIndex: 'address',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
]

class DocSign extends React.Component {
  state = {
  };

  render() {
    return (
      <div className="approve-container">
        <div className="breadcrumb">
          <Breadcrumb separator=">">
            <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
            <Breadcrumb.Item href="">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="">公文签批</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div style={{marginBottom:'15px'}}>
          <Select defaultValue="lucy" style={{width:120}} onChange={this.handleSelectChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
          <Select combobox
            style={{width:200,marginLeft:'10px'}}
            onChange={this.handleChange}
            filterOption={false}
            searchPlaceholder="请输入账户名">
            {this.state.options}
          </Select>
          <Button type="primary" htmlType="submit" style={{marginLeft:'10px', backgroundColor: '#2db7f5' }}>搜索</Button>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination
            bordered
          />
        </div>
      </div>
    )
  }
}

export default DocSign
