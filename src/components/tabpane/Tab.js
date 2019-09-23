import React from "react";
import {Select,Button,Table,Steps } from 'antd'
const Option = Select.Option;
const Step = Steps.Step;
import components from '../../components/index'

const children = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

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

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible:props.visible,
      current:1,
      total:100,
      formData: {
        userName: '大眼萌 minion',
        password: undefined,
        gender: 'male',
        remark: undefined,
        agreement: undefined,
      },
      visible_qj:false
    };
  }

  componentDidMount() {
    const type = this.props.type;
    console.log(type);
  }


  handleSelectChange = (value) => {
    console.log('selected ' + value);
  }

  handleUpdate = (text) => {
    console.log(text);
    switch (text.type) {
      case 'qj':this.setState({ visible_qj: true});break
      case 'jb':console.log("jn"); break
      case 'bx':this.setState({ visible_bx: true});break
      case 'cc':console.log("cc"); break
      case 'wc':console.log("wc"); break
      case 'wp':console.log("wp"); break
    }
  }

  handleOk = (params) => {
    switch (params.type) {
      case 'qj':this.setState({ visible_qj: false});break
      case 'jb':console.log("jn"); break
      case 'bx':this.setState({ visible_bx: false}); break
      case 'cc':console.log("cc"); break
      case 'wc':console.log("wc"); break
      case 'wp':console.log("wp"); break
    }
  }

  handleCancel = (params) => {
    switch (params.type) {
      case 'qj':this.setState({ visible_qj: false});break
      case 'jb':console.log("jn"); break
      case 'bx':this.setState({ visible_bx: false});break
      case 'cc':console.log("cc"); break
      case 'wc':console.log("wc"); break
      case 'wp':console.log("wp"); break
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
    const { formData,visible_qj } = this.state;
    const columns = [
      {
        title: '申请人',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: '申请类型',
        className: 'column-money',
        dataIndex: 'type',
      },
      {
        title: '申请理由',
        dataIndex: 'address',
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
      <div>
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
          <Button type="primary" onClick={this.showModal}>添加</Button>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination
          />
        </div>
        <components.QJModal visible={visible_qj} onOk={this.handleOk} onCancel={this.handleCancel}/>
      </div>
    );
  }
}

export default Tab;
