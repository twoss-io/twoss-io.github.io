import React, {Component} from 'react';
import {
    Icon,
    Row,
    Col,
    Tag
} from 'antd';

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

class IssHead extends Component {

    componentWillMount() {}

    componentDidMount() {
        
    }

    componentDidUpdate() {}

    render() {
        return (
            <Row gutter={8}>
                <Col span={12}>
                    <a className="isu_title" style={{'fontWeight':600}}>
                        {this.props.issue.title}
                    </a>
                </Col>
                <Col span={12}>
                    <div style={{'textAlign':'right', 'paddingRight':10}}>
                        <span>#
                            <span className="isu_num">
                                {this.props.issue.number}
                            </span> 由
                            <u><a className="isu_user" href={this.props.issue.user.html_url} target="_blank">
                                {this.props.issue.user.login}
                            </a></u> 發起
                        </span>
                    </div>
                </Col>
                <Col span={24}>
                    <hr
                        style={{
                        margin: 12,
                        border: 'none',
                        borderTop: 'dashed 4px',
                        borderColor:'#e9e9e9',
                        borderWidth: 1
                    }}/>
                </Col>
                <Col span={12}>
                    回應數｜ <Tag color="#108ee9">{this.props.issue.comments}</Tag>
                </Col>
                <Col span={12}>
                    <div style={{'textAlign':'right', 'paddingRight':10}}>
                        <Icon type="clock-circle-o" /> &nbsp; {new Date(this.props.issue.updated_at).toLocaleDateString()}
                    </div>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators({}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssHead)