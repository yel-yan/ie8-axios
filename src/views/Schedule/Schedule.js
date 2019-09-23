import React from 'react'
import { Menu, Icon, Tabs, Breadcrumb, Select, Button, Table, Modal, Form, Input, Checkbox, Radio, Row, Col, DatePicker, Slider, Upload, Steps } from 'antd'
import '../../style/DocSign.less'
import components from '../../components/index'
import '../../style/schedule.less'

const TabPane = Tabs.TabPane
const Option = Select.Option
const FormItem = Form.Item
const RadioGroup = Radio.Group
const Step = Steps.Step

const data = [{
  key: '1',
  name: '01',
  begin: '2018-08-09',
  finish: '2018-08-10',
  content: '在这里显示内容，注意控制字符长短注意控制字符长短',
},
{
  key: '2',
  name: '02',
  begin: '2018-08-09',
  finish: '2018-08-10',
  content: '在这里显示内容，注意控制字符长短注意控制字符长短',
},
{
  key: '4',
  name: '04',
  begin: '2018-08-09',
  finish: '2018-08-10',
  content: '在这里显示内容，注意控制字符长短注意控制字符长短',
},
{
  key: '5',
  name: '05',
  begin: '2018-08-09',
  finish: '2018-08-10',
  content: '在这里显示内容，注意控制字符长短注意控制字符长短',
},
{
  key: '6',
  name: '06',
  begin: '2018-08-09',
  finish: '2018-08-10',
  content: '在这里显示内容，注意控制字符长短注意控制字符长短',
},
{
  key: '7',
  name: '07',
  begin: '2018-08-09',
  finish: '2018-08-10',
  content: '在这里显示内容，注意控制字符长短注意控制字符长短',
},
{
  key: '8',
  name: '08',
  begin: '2018-08-09',
  finish: '2018-08-10',
  content: '在这里显示内容，注意控制字符长短注意控制字符长短',
},
{
  key: '9',
  name: '09',
  begin: '2018-08-09',
  finish: '2018-08-10',
  content: '在这里显示内容，注意控制字符长短注意控制字符长短',
},
]

const steps = [{
  status: 'finish',
  title: '已完成',
  description: '严尔林',
}, {
  status: 'process',
  title: '进行中',
  description: '严尔林',
}, {
  status: 'wait',
  title: '待定',
  description: '严尔林',
}, {
  status: 'wait',
  title: '待定',
  description: '严尔林',
}].map((s, i) => (
  <Step key={i} title={s.title} status={s.status} description={s.description} />
))

const children = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

class Schedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 1,
      total: 100,
      visible: false,
      formData: {
        userName: '大眼萌 minion',
        password: undefined,
        gender: 'male',
        remark: undefined,
        agreement: undefined,
      },
    }
  }

  onChange = (current) => {
    console.log('Current: ', current)
    this.setState({
      current,
    })
  }

  handleUpdate = (text) => {
    console.log(text)
    this.setState({
      visible: true,
    })
  }
  handleOk = () => {
    console.log('点击了确定')
    this.setState({
      visible: false,
    })
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }


  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    message.success(`收到表单值~~~ ：${JSON.stringify(this.state.formData, (k, v) => {
      if (typeof v === 'undefined') {
        return ''
      }
      return v
    })}`)
  }

  render() {
    const { formData } = this.state
    const columns = [
      {
        title: '日程',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: '开始时间',
        dataIndex: 'begin',
      },
      {
        title: '结束时间',
        dataIndex: 'finish',
      },
      {
        title: '内容',
        dataIndex: 'content',
      },
      {
        title: '详情',
        dataIndex: 'details',
        render: (text, record) => (<span>
          <Button type="primary" htmlType="submit" style={{ marginLeft: '10px' }} onClick={this.handleUpdate.bind(this, text)}>查看</Button>
        </span>),
      },
    ]
    return (
      <div className="schedule-container">
        <div className="schedule-breadcrumb">
          <Breadcrumb separator=">">
            <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
            <Breadcrumb.Item href="">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="">待审批</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="case" style={{ marginBottom: '15px' }}>
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
          <div style={{ clear: 'both' }} />
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              total: this.state.total,
              current: this.state.current,
              showSizeChanger: true,
              showQuickJumper: true,
              onShowSizeChange: (current, pageSize) => {
                console.log('Current: ', current, '; PageSize: ', pageSize)
              },
              onShowQuickJumper: (current) => {
                console.log('Current: ', current)
              },
              onChange: this.onChange,
            }}
            // bordered
            size="middle"
          />
        </div>

        <Modal
          title="请假"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormItem
              id="control-textarea"
              label="日程内容："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
            >
              <Input type="textarea" id="control-textarea" rows="3" />
            </FormItem>
            <FormItem
              label="日期选择框："
              labelCol={{ span: 6 }}
              required
            >
              <Col span="6">
                <DatePicker name="startDate" value={formData.startDate} />
              </Col>
              <Col span="1">
                <p className="ant-form-split">-</p>
              </Col>
              <Col span="6">
                <DatePicker name="endDate" value={formData.endDate} />
              </Col>
            </FormItem>
            <FormItem
              id="remark"
              label="提醒："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
              required
              help="提前五分钟"
            >
              <Input type="textarea" placeholder="提前五分钟" id="remark" name="remark" value={formData.remark} />
            </FormItem>
            <FormItem
              wrapperCol={{ span: 14, offset: 6 }}
            />
            {/* <Row>
              <Col span="16" offset="6">
                <Button type="primary" htmlType="submit">确定</Button>
                <Button type="ghost" htmlType="submit">取消</Button>
              </Col>
            </Row> */}
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Schedule
