import React, {Component} from 'react';
import {
    Row,
    Col,
    Spin
} from 'antd';
import Media from 'react-media'
import SmallCard from './smallCard'
import JQCloud from './jqCloud'
import {fetchRepos, showLoginModal, getAct} from '../actions/actions'
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
            .fetchRepos('?sort=updated')

        this
            .props
            .pageActions
            .getAct()
    }

    render() {
        let repos = this.props.repos.repos
        let isFetched = this.props.repos.isFetched
        console.log(this.props)
        let col = repos.map((item, index) => {
            if (item.name === 'oss-collection' ||item.name === 'oss-tourist' ||item.name === 'twoss-io.origin' ||item.name === 'issues-testing' || item.name === 'twoss-io-videocms-demo' || item.name === 'Main' || item.name === 'demand' || item.name === 'recruitment') {
                return null
            } else {
                return <Col
                    lg={6}
                    md={12}
                    key={index}
                    style={{
                    padding: 16
                }}>
                    <SmallCard wait={index * 200} item={item} index={index}/>
                </Col>
            }
        })
        let s_one = {
            padding:'32px 16px'
        }
        let s_two = {
            padding:'32px 128px'
        }

        return (
            <div>
                <JQCloud item={repos}/>
                <Media query="(max-width: 1023px)">
                    {match=>{
                        let s_ = match ? s_one : s_two
                        return <Row
                            gutter={0}
                            style={s_}>
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
                    }}
                </Media>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {repos: state.repos, info: state.info, user:state.user, acts:state.act.acts}
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators({
            fetchRepos, showLoginModal, getAct
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups)