import React from "react";
import { Form, Select, InputNumber, DatePicker, Switch,
    Slider, Button, message, Row, Col, Upload, Icon, Modal, Input } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const children = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

const CCModal = React.createClass({
    mixins: [Form.ValueMixin],

    getInitialState() {
        return {
            formData: {
                inputNumber: undefined,
                static: '唧唧复唧唧木兰当户织呀',
                switch: undefined,
                slider: undefined,
                select: undefined,
                startDate: undefined,
                endDate: undefined,
            }
        };
    },

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
        this.props.onOk({visible:!this.props.visible,type:'cc'})
    },
    
    handleCancel(){
        this.props.onCancel({visible:!this.props.visible,type:'cc'})
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
        const formData = this.state.formData;
        console.log(this.props.visible)
        const visible = this.props.visible;
        const operationType = this.props.operationType;
        return (
            <Modal title="出差" visible={visible}
                    onOk={this.handleOk} onCancel={this.handleCancel}>
                <Form horizontal onSubmit={this.handleSubmit} >
                    <FormItem
                        id="control-input"
                        label="目的地："
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}>
                        <Input id="control-input" placeholder="Please enter..." disabled={operationType}/>
                    </FormItem>

                    <FormItem
                        label="起止时间："
                        labelCol={{span: 6}}
                        required>
                        <Col span="6">
                            <DatePicker name="startDate" onChange={this.setValue.bind(this, 'startDate')} value={formData.startDate} disabled={operationType}/>
                        </Col>
                        <Col span="1">
                        <p className="ant-form-split">-</p>
                        </Col>
                        <Col span="6">
                            <DatePicker name="endDate" onChange={this.setValue.bind(this, 'endDate')} value={formData.endDate} disabled={operationType}/>
                        </Col>
                    </FormItem>

                    <FormItem
                        label="出差天数："
                        labelCol={{span: 6}}
                        wrapperCol={{span: 10}}
                        required>
                        <InputNumber size="large" min={1} max={10} style={{width:100}} defaultValue={3} name="inputNumber" onChange={this.setValue.bind(this, 'inputNumber')} value={formData.inputNumber} disabled={operationType}/>
                        <span className="ant-form-text"> 天</span>
                    </FormItem>

                    <FormItem
                        id="control-textarea"
                        label="出差事由"
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}>
                        <Input type="textarea" placeholder="请输入" id="control-textarea" rows="3" disabled={operationType}/>
                    </FormItem>

                    <FormItem
                        label="审批人"
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}
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
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}
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
        );
    }
});

export default CCModal;