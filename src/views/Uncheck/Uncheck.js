import React from 'react'
import { Icon,Breadcrumb,Select,Button,Table,Steps } from 'antd'
import '../../style/DocSign.less'
const Option = Select.Option;
const Step = Steps.Step;
import components from '../../components/index'
import * as API from '../../axios/myAxios'


const data = [
  {
    key: '1',
    name: 'John Brown',
    type: 'qj',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    type: 'bx',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    type: 'cc',
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'John Brown',
    type: 'jb',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '5',
    name: 'Jim Green',
    type: 'wc',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Joe Black',
    type: 'wp',
    address: 'Sidney No. 1 Lake Park',
  },
]

const steps = [{
  status: 'finish',
  title: '已完成',
  description: '严尔林'
}, {
  status: 'process',
  title: '进行中',
  description: '严尔林'
}, {
  status: 'wait',
  title: '待定',
  description: '严尔林'
}, {
  status: 'wait',
  title: '待定',
  description: '严尔林'
}].map(function(s, i) {
  return (
    <Step key={i} title={s.title} status={s.status} description={s.description} />
  );
});

const children = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

class Uncheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current:1,
      total:100,
      formData: {},
      visible_qj:false,
      visible_bx:false,
      visible_cc:false,
      visible_jb:false,
      visible_wc:false,
      visible_wp:false,
      operationType: true,
      list:[]
    },
    this.page = 1;
    this.num = 30;
    this.total = 0;
  }

  componentDidMount () {
    API.GET('search/pending',{ page:this.page,num:this.num }).then((data) => {
      console.log('待审批列表数据')
      console.log(data)
      let newData = data.data
      let newList = [];
      newData = newData.map((item) => {
        console.log(item)
        switch (item.Cates) {
          case 'leave':newList.push(Object.assign(item,{type:'qj',Cates:'请假'}));break
          case 'overtime':newList.push(Object.assign(item,{type:'jb',Cates:'加班'})); break
          case 'expense':newList.push(Object.assign(item,{type:'bx',Cates:'报销'}));break
          case 'businesstrip':newList.push(Object.assign(item,{type:'cc',Cates:'出差'})); break
          case 'goout':newList.push(Object.assign(item,{type:'wc',Cates:'外出'})); break
          case 'oagoods':newList.push(Object.assign(item,{type:'wp',Cates:'物品'})); break
        }
      })
      console.log(newList)
      this.setState({list:newList})
    }).catch((err) => {
      console.log(err);
    })
  }

  handleUpdate = (text) => {
    console.log(text);
    const temp = Object.assign({}, text)
    switch (text.type) {
      case 'qj':this.setState({ visible_qj: true});break
      case 'jb':this.setState({ visible_jb: true}); break
      case 'bx':this.setState({ visible_bx: true});break
      case 'cc':this.setState({ visible_cc: true}); break
      case 'wc':this.setState({ visible_wc: true}); break
      case 'wp':this.setState({ visible_wp: true}); break
    }
    API.GET('/leaves/approval',{id:text.ApplyId}).then((data) => {
      console.log('请假详情页数据')
      console.log(data)
      this.setState({formData:data.data})
    }).catch((err) => {
      console.log(err);
    })
  }

  onChange = (current) => {
    console.log('Current: ', current);
    this.setState({
      current: current
    });
  }

  handleCreate = (params) => {
    console.log(text);
    const temp = Object.assign({operationType:1}, text)
    this.setState({operationType:false})
    switch (text.type) {
      case 'qj':this.setState({ visible_qj: true});break
      case 'jb':this.setState({ visible_jb: true}); break
      case 'bx':this.setState({ visible_bx: true});break
      case 'cc':this.setState({ visible_cc: true}); break
      case 'wc':this.setState({ visible_wc: true}); break
      case 'wp':this.setState({ visible_wp: true}); break
    }
  }

  handleOk = (params) => {
    switch (params.type) {
      case 'qj':this.setState({ visible_qj: false});break
      case 'jb':this.setState({ visible_jb: false}); break
      case 'bx':this.setState({ visible_bx: false}); break
      case 'cc':this.setState({ visible_cc: false});break
      case 'wc':this.setState({ visible_wc: false}); break
      case 'wp':this.setState({ visible_wp: false}); break
    }
  }

  handleCancel = (params) => {
    switch (params.type) {
      case 'qj':this.setState({ visible_qj: false});break
      case 'jb':this.setState({ visible_jb: false}); break
      case 'bx':this.setState({ visible_bx: false});break
      case 'cc':this.setState({ visible_cc: false}); break
      case 'wc':this.setState({ visible_wc: false}); break
      case 'wp':this.setState({ visible_wp: false}); break
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    message.success('收到表单值~~~ ：' + JSON.stringify(this.state.formData, function(k, v) {
      if (typeof v === 'undefined') {
        return '';
      }
      return v;
    }));
  }

  render() {
    const { list, formData ,visible_qj,visible_bx,visible_cc,visible_jb,visible_wc,visible_wp,operationType} = this.state;
    const columns = [
      {
        title: '申请人',
        dataIndex: 'Realname',
        render: text => <a>{text}</a>,
      },
      {
        title: '申请类型',
        className: 'column-money',
        dataIndex: 'Cates',
      },
      {
        title: '申请理由',
        dataIndex: 'Reason',
      },
      {
        title: '操作',
        key: 'operation',
        width:'100',
        className:'column-operation',
        render: (text, record) => {
          return <span>
            <Button type="primary" htmlType="submit" style={{marginLeft:'10px'}} onClick={this.handleUpdate.bind(this, text)}>审批</Button>
          </span>;
        }
      }
    ]
    return (
      <div className="approve-container">
        <div className="breadcrumb">
          <Breadcrumb separator=">">
            <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
            <Breadcrumb.Item href="">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="">待审批</Breadcrumb.Item>
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
          <Button type="primary" htmlType="submit" style={{margin:'0 10px'}}>搜索</Button>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={list}
            pagination={{
              total: this.state.total,
              current: this.state.current,
              showSizeChanger: true,
              showQuickJumper :true,
              onShowSizeChange: (current, pageSize) => {
                console.log('Current: ', current, '; PageSize: ', pageSize);
              },
              onShowQuickJumper:(current) => {
                console.log('Current: ', current,);
              },
              onChange: this.onChange
            }}
            bordered
            size="middle"
          />
        </div>
        
        <components.QJModal visible={visible_qj} formData={formData} onOk={this.handleOk} onCancel={this.handleCancel} operationType={operationType}/>

        <components.BXModal visible={visible_bx} onOk={this.handleOk} onCancel={this.handleCancel} operationType={operationType}/>

        <components.CCModal visible={visible_cc} onOk={this.handleOk} onCancel={this.handleCancel} operationType={operationType}/>
        <components.JBModal visible={visible_jb} onOk={this.handleOk} onCancel={this.handleCancel} operationType={operationType}/>
        <components.WCModal visible={visible_wc} onOk={this.handleOk} onCancel={this.handleCancel} operationType={operationType}/>
        <components.WPModal visible={visible_wp} onOk={this.handleOk} onCancel={this.handleCancel} operationType={operationType}/>
      </div>
    )
  }
}

export default Uncheck
