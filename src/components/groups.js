import React, {Component} from 'react';
import {
    Row,
    Col,
    Icon,
    Spin,
    Card,
    Modal
} from 'antd';
import SmallCard from './smallCard'
import JQCloud from './jqCloud'
import {fetchRepos, showLoginModal} from '../actions/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Groups extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        };
    }

    componentWillMount() {

    }

    componentDidMount() {
        this
            .props
            .pageActions
            .fetchRepos()
    }

    render() {
        let repos = this.props.repos.repos
        let isFetched = this.props.repos.isFetched
        let col = repos.map((item, index) => {
            if (item.name == 'issues-testing' || item.name == 'twoss-io-videocms-demo' || item.name == 'Main' || item.name == 'demand' || item.name == 'recruitment') {} else {
                return <Col
                    lg={6}
                    md={4}
                    key={index}
                    style={{
                    padding: 16
                }}>
                    <SmallCard wait={index * 200} item={item} index={index}/>
                </Col>
            }
        })
        return (
            <div>
                <JQCloud item={repos}/>
                <Row
                    gutter={0}
                    style={{
                    padding:'32px 128px'
                }}>
                    {isFetched
                        ? <Col
                                span={24}
                                style={{
                                textAlign: 'center',
                                paddingTop: '64px'
                            }}>
                                <Spin size="large"/>
                            </Col>
                        : col}
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {repos: state.repos, info: state.info, user:state.user}
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators({
            fetchRepos, showLoginModal
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups)