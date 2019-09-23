import React from "react";
import { Menu, Icon,Tabs,Breadcrumb,Select,Button,Table,Modal,Form, Input,Checkbox, Radio,Row,Col,DatePicker,Slider,Upload,Steps,Card } from 'antd'
const TabPane = Tabs.TabPane;
const Option = Select.Option;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Step = Steps.Step;

const children = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

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

class BXModal extends React.Component {
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
            }
        };
    }

    handleOk = () => {
        this.props.onOk({visible:!this.props.visible,type:'bx'})
    }
    
    handleCancel = () => {
        this.props.onCancel({visible:!this.props.visible,type:'bx'})
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
        const { formData } = this.state;
        console.log(this.props.visible)
        const visible = this.props.visible;
        return (
            <div>
                <Modal title="报销" visible={visible} width={'620'}
                    onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Form horizontal onSubmit={this.handleSubmit}>
                    <FormItem
                        id="control-input"
                        label="报销事由："
                        labelCol={{span: 4}}
                        wrapperCol={{span: 18}}>
                        <Input id="control-input" placeholder="请输入..." />
                    </FormItem>

                    <Row style={{marginBottom:'24px'}}>
                        <Col span="2"></Col>
                        <Col span="20">
                            <Card title="报销明细1" extra={<a href="#">删除</a>}>
                                <Row>
                                    <Col span="12">
                                        <FormItem
                                            label="费用类型："
                                            labelCol={{span: 8}}
                                            wrapperCol={{span: 12}}>
                                            <Select size="large" defaultValue="lucy" style={{width:100}} name="select" value={formData.select}>
                                                <Option value="jack">jack</Option>
                                                <Option value="lucy">lucy</Option>
                                                <Option value="disabled" disabled>disabled</Option>
                                                <Option value="yiminghe">yiminghe</Option>
                                            </Select>
                                        </FormItem>
                                    </Col>
                                    <Col span="12">
                                        <FormItem
                                            label="报销金额："
                                            labelCol={{span: 8}}
                                            wrapperCol={{span: 12}}>
                                            <Input id="defaultInput" placeholder="填入金额" />
                                        </FormItem>
                                    </Col>
                                </Row>
                                <FormItem
                                    label="发生时间："
                                    labelCol={{span: 4}}
                                    required>
                                    <DatePicker name="startDate" value={formData.startDate} />
                                </FormItem>
                                <FormItem
                                    id="control-textarea"
                                    label="费用说明："
                                    labelCol={{span: 4}}
                                    wrapperCol={{span: 14}}>
                                    <Input type="textarea" placeholder="请输入" id="control-textarea" rows="3" />
                                </FormItem>

                            </Card>
                        </Col>
                    </Row>

                    <FormItem wrapperCol={{ span: 18, offset: 2 }}>
                        <Button onClick={this.add} icon="plus" size="small" style={{ marginRight: 8 }}>新增明细</Button>
                    </FormItem>
                    
                    <FormItem
                        id="control-input"
                        label="报销总额："
                        labelCol={{span: 4}}
                        wrapperCol={{span: 18}}>
                        <Input id="control-input" placeholder="请输入..." />
                    </FormItem>

                    <FormItem
                        label="审批人"
                        labelCol={{span: 4}}
                        wrapperCol={{span: 18}}
                        required>
                        <Select
                            multiple
                            defaultValue={['a10', 'c12']}
                            onChange={this.handleChange1}
                        >
                            {children}
                        </Select>
                    </FormItem>

                    <FormItem
                        label="抄送人"
                        labelCol={{span: 4}}
                        wrapperCol={{span: 18}}
                        required>
                        <Select
                            multiple
                            defaultValue={['a10', 'c12']}
                            onChange={this.handleChange1}
                        >
                            {children}
                        </Select>
                    </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default BXModal;