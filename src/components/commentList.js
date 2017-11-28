import React, {Component} from 'react';
import {
    Icon,
    Row,
    Col,
    Tag,
    Badge,
    Card,
    Spin,
    Avatar,
    Button,
    Form,
    Input,
    message
} from 'antd';

import $ from 'jquery'

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

import {fetchCom, postCom} from '../actions/actions'

import './commentList.css'

const FormItem = Form.Item;
const {TextArea} = Input

class CommentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fetching:false
        }
    }

    componentWillMount() {}

    componentDidMount() {
        let repo = this.props.repo
        let isu = this.props.issue
        let coms = this.props.comments.comments
        if(!coms[repo + isu])
            this
                .props
                .pageActions
                .fetchCom(this.props.repo, this.props.issue)
    }

    componentDidUpdate() {}

    handleSubmit = (e) => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    console.log(values);
                    this.setState({
                        fetching:true
                    })

                    this.props.pageActions.postCom(this.props.repo, this.props.issue, values).then((res)=>{
                        this.setState({
                            fetching:false
                        })
                        message.success('議題回應成功')
                        this.props.pageActions.fetchCom(this.props.repo, this.props.issue)
                        this.props.form.resetFields()
                    })
                }
            });
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        let isFetched = this.props.comments.isFetched
        let repo = this.props.repo
        let isu = this.props.issue
        let coms = this.props.comments.comments
        let col = <Col span={24} key='none'>目前暫無回應</Col>
        if (!isFetched && coms[repo + isu] && coms[repo + isu].length > 0) {
            col = coms[repo + isu].map((elm, idx) => {
                return <Col span={24} key={idx}>
                    <Card title={<Row gutter={0}><Col span={1}><Avatar src={elm.user.avatar_url}/></Col><Col span={20}><a href={elm.user.html_url} target="_blank">{elm.user.login}</a></Col><Col span={3} style={{textAlign:'right'}}>{new Date(elm.updated_at).toLocaleDateString()}</Col></Row>} noHovering={true} className="comCard">{elm.body}</Card>
                </Col>
            })
        }

        return (
            <div>
                <Col span={24}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem wrapperCol={{
                            xs: {
                                span: 24,
                                offset: 0
                            },
                            sm: {
                                span: 12,
                                offset: 6
                            }
                        }}>
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
                                minRows: 3,
                                maxRows: 6
                            }}/>)}
                        </FormItem>
                        <FormItem wrapperCol={{
                            xs: {
                                span: 24,
                                offset: 0
                            },
                            sm: {
                                span: 12,
                                offset: 6
                            }
                        }}>
                            <Button htmlType="submit" type="primary" icon="message" style={{background:'rgb(135, 208, 104)', border:0, float:'right'}} size="small" loading={this.state.fetching}> 新增回應</Button>
                        </FormItem>
                    </Form>
                </Col>
                <Col span={24}>
                    <hr
                        style={{
                        margin: 12,
                        border: 'none',
                        borderTop: 'dashed 4px',
                        borderColor: '#e9e9e9',
                        borderWidth: 1
                    }}/>
                </Col>
                {isFetched
                    ? <Col
                            span={24}
                            style={{
                            textAlign: 'center'
                        }}>
                            <Spin size="large"/>
                        </Col>
                    : col}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {comments: state.comment}
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators({
            fetchCom, postCom
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CommentList))