import React, {Component} from 'react';
import {
    Icon,
    Row,
    Col,
    Tag,
    Button,
    Form,
    Input,
    message
} from 'antd';

import $ from 'jquery'

import Issues from './issues'

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

import './addIssue.css'

import {fetchIssues, postIssues} from '../actions/actions'

const FormItem = Form.Item;
const {TextArea} = Input

class AddIssue extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fetching:false
        }
    }

    componentWillMount() {
    }

    componentDidMount() {}

    componentDidUpdate() {}

    handleSubmit = (e) => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    this.setState({
                        fetching:true
                    })

                    this.props.pageActions.postIssues(this.props.repo, values).then((res)=>{
                        this.setState({
                            fetching:false
                        })
                        message.success('議題新增成功')
                        this.props.pageActions.fetchIssues(this.props.repo)
                        this.props.func()
                        this.props.form.resetFields()
                    }, err=>{console.log(err)})
                }
            });
    }

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 6
                }
            },
            wrapperCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 14
                }
            }
        };
        return (
            <Form onSubmit={this.handleSubmit} className="issueform">
                <FormItem {...formItemLayout} label="標題">
                    {getFieldDecorator('title', {
                        rules: [
                            {
                                required: true,
                                message: '請輸入標題'
                            }
                        ]
                    })(<Input placeholder="標題"/>)}
                </FormItem>
                <FormItem {...formItemLayout} label="內容">
                    {getFieldDecorator('body', {
                        rules: [
                            {
                                required: true,
                                message: '請輸入內容'
                            }
                        ]
                    })(<TextArea
                        placeholder="內容"
                        autosize={{
                        minRows: 6,
                        maxRows: 12
                    }}/>)}
                </FormItem>
                <FormItem
                    wrapperCol={{
                    xs: {
                        span: 24,
                        offset: 0
                    },
                    sm: {
                        span: 14,
                        offset: 6
                    }
                }}>
                    <Button type="primary" htmlType="submit" className="submit-form-button" loading={this.state.fetching}>
                        新增
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {pageActions: bindActionCreators({
        postIssues, fetchIssues
    }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AddIssue))