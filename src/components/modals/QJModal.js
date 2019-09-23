import React from "react";
import { Form, Select, InputNumber, DatePicker,
    Slider, Button, message,  Col,  Modal, Input,Steps } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const Step = Steps.Step;
import * as API from '../../axios/myAxios'
import json from 'json3'

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

const QJModal = React.createClass({
    mixins: [Form.ValueMixin],

    getInitialState() {
        return {
            formData: {
                Realname: '',
                static: '唧唧复唧唧木兰当户织呀',
                switch: undefined,
                slider: undefined,
                select: undefined,
                startDate: undefined,
                endDate: undefined,
            }
        };
    },

    // componentDidMount(){
    //     const formData = this.props.formData;
    // },

    handleUpload(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(info.file.name + ' 上传成功。');
        } else if (info.file.status === 'error') {
            message.error(info.file.name + ' 上传失败。');
        }
    },

    handleOk() {
        this.props.onOk({visible:!this.props.visible,type:'qj'})
    },
    
    handleCancel(){
        this.props.onCancel({visible:!this.props.visible,type:'qj'})
    },

    handleSubmit(e) {
        e.preventDefault();
        message.success('收到表单值~~~ ：' + JSON.stringify(this.state.formData, function(k, v) {
        if (typeof v === 'undefined') {
            return '';
        }
            return v;
        }));
    },

    render() {
        const formData = this.props.formData;
        console.log('请假详情页MODAL数据',this.props.formData)
        //ie8 不支持这个方法，会引起异常
        // if(Object.keys(formData).length > 0){
        //     console.log(formData.leave.Realname)
        // }
        if(JSON.stringify(formData) == "{}"){
            console.log("formData.leave.Realname")
        }
        console.log(Object.assign({},{status:'finish',title:'已完成'}))
        Object.assign({},{status:'finish',title:'已完成'})
        const visible = this.props.visible;
        const operationType = this.props.operationType;
        return (
            <Modal title="请假" visible={visible}
                onOk={this.handleOk} onCancel={this.handleCancel}
                footer={operationType ?[
                    <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>不同意</Button>,
                    <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
                        同 意
                    </Button>
                    ]:[
                        <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
                            提交
                        </Button>
                        ]}>
                <Form horizontal onSubmit={this.handleSubmit} >
                    {
                        operationType && 
                        <FormItem
                            id="control-input"
                            label="申请人："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 6}}>
                            <Input id="control-input" value={Object.keys(formData).length > 0 ? formData.leave.Realname : ''} required disabled={operationType}/>
                        </FormItem>
                    }

                    <FormItem
                        label="请假类型："
                        labelCol={{span: 6}}
                        wrapperCol={{span: 16}}
                        required>
                        <Select size="large" defaultValue="lucy" style={{width:200}} name="select" onChange={this.setValue.bind(this, 'select')} disabled={operationType}>
                            <Option value="jack">jack</Option>
                            <Option value="lucy">lucy</Option>
                            <Option value="yiminghe">yiminghe</Option>
                        </Select>
                    </FormItem>

                    <FormItem
                        label="起止时间："
                        labelCol={{span: 6}}
                        required>
                        <Col span="6">
                            <DatePicker name="startDate" defaultValue="1563241938" onChange={this.setValue.bind(this, 'startDate')} disabled={operationType}/>
                        </Col>
                        <Col span="1">
                        <p className="ant-form-split">-</p>
                        </Col>
                        <Col span="6">
                            <DatePicker name="endDate" defaultValue="2015-01-01" onChange={this.setValue.bind(this, 'endDate')} disabled={operationType}/>
                        </Col>
                    </FormItem>

                    <FormItem
                        label="请假天数："
                        labelCol={{span: 6}}
                        wrapperCol={{span: 10}}
                        required>
                        <InputNumber size="large" min={1} max={10} style={{width:100}} defaultValue={3} name="inputNumber" onChange={this.setValue.bind(this, 'inputNumber')} disabled={operationType}/>
                        <span className="ant-form-text"> 天</span>
                    </FormItem>

                    <FormItem
                        id="control-textarea"
                        label="请假事由："
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}>
                        <Input type="textarea" placeholder="请输入" defaultValue="2015-01-01" id="control-textarea" rows="3" disabled={operationType}/>
                    </FormItem>

                    {
                        operationType ?
                        <FormItem
                            label="审批人："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 14}}
                            required>
                            <Steps style={{paddingTop:'7px'}}  size="small" direction="vertical" >{steps}</Steps>
                        </FormItem>
                        :
                        <FormItem
                            label="审批人"
                            labelCol={{span: 6}}
                            wrapperCol={{span: 14}}
                            required>
                            <Select
                                multiple
                                defaultValue={['a10', 'c12']}
                                onChange={this.handleChange1}
                                disabled
                            >
                                {children}
                            </Select>
                        </FormItem>
                    }

                    <FormItem
                        label="抄送人"
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}
                        required>
                        <Select
                            multiple
                            defaultValue={['a10', 'c12']}
                            onChange={this.handleChange1}
                            disabled
                        >
                            {children}
                        </Select>
                    </FormItem>
                </Form>
            </Modal>
        );
    }
});

export default QJModal;