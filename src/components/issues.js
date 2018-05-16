import React, {Component} from 'react';
import {
    Row,
    Col,
    Spin,
    Collapse
} from 'antd';

import IssHead from './issHead'
import CommentList from './commentList'

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

import {fetchIssues} from '../actions/actions'

import './issues.css'

const Panel = Collapse.Panel;

class Issues extends Component {
    componentDidMount() {
        this
            .props
            .pageActions
            .fetchIssues(this.props.repo)
    }

    render() {
        let repo = this.props.repo
        let issues = this.props.issues.issues
        let isFetched = this.props.issues.isFetched
        let col = <Panel header="目前暫無資料" key='none'>目前暫無資料</Panel>
        if (!isFetched && issues[repo] && issues[repo].length > 0) {
            col = issues[repo].map((elm, idx) => {
                return <Panel
                    header={< IssHead issue = {
                    elm
                } />}
                    key={idx}
                    className="customPanelStyle">
                    <Row gutter={8}>
                        <Col span={24}>
                            <p>{elm.body}</p>
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
                        <CommentList repo={this.props.repo} issue={elm.number}/>
                    </Row>
                </Panel>
            })
        }

        return (
            <Row gutter={0}>

                {isFetched
                    ? <Col
                            span={24}
                            style={{
                            textAlign: 'center'
                        }}>
                            <Spin size="large"/>
                        </Col>
                    : <Col span={24}>
                        <Collapse bordered={false} accordion>
                            {col}
                        </Collapse>
                    </Col>
}
            </Row>
        )
    }
}

function mapStateToProps(state) {
    return {issues: state.issues}
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators({
            fetchIssues
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Issues)