import React, {Component} from 'react'
import {Layout, Menu, Row, Col, Icon} from 'antd';
import Media from 'react-media'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {switchPage, showLoginModal, doLogout} from '../actions/actions'

import $ from 'jquery'

const {Header} = Layout;
const {SubMenu} = Menu;

class Headers extends Component {
    handleClick = (e) => {
        let key = e.key
        if (key === 'login') {
            this
                .props
                .pageActions
                .showLoginModal(true)
        } else if (key === 'logout') {
            this
                .props
                .pageActions
                .doLogout()
            window
                .location
                .reload()
        } else {
            $("html, body").animate({scrollTop: "0px"});
            this
                .props
                .pageActions
                .switchPage(key)
        }
    }
    render() {
        return (
            <Header
                style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                height: 96,
                zIndex: 999
            }}>
                <Row>
                    <Col span={4}>
                        <img
                            alt=''
                            src={require("../img/icon.png")}
                            style={{
                            display: 'block',
                            width: 'auto',
                            height: 96,
                            padding: 10,
                            cursor: 'pointer'
                        }}
                            onClick={() => window.location.reload()}/>
                    </Col>
                    <Col span={20}>
                        <Media query="(max-width: 1023px)">
                            {matches => matches
                                ? (
                                    <Menu
                                        onClick={(e) => this.handleClick(e)}
                                        theme="dark"
                                        mode="horizontal"
                                        defaultSelectedKeys={['home']}
                                        style={{
                                        lineHeight: '96px',
                                        float: 'right'
                                    }}>

                                        <SubMenu title={< Icon type = "bars" style = {{fontSize: 32 }}/>}>
                                            {this.props.user.user_name
                                                ? <Menu.Item
                                                        key="logout"
                                                        style={{
                                                        float: 'right',
                                                        fontSize: 18
                                                    }}>
                                                        {this.props.user.user_name}
                                                        &nbsp;
                                                        <Icon type="logout"/>登出
                                                    </Menu.Item>
                                                : <Menu.Item
                                                    key="login"
                                                    style={{
                                                    float: 'right',
                                                    fontSize: 18
                                                }}>
                                                    <Icon type="github"/>登入
                                                </Menu.Item>
}
                                            <Menu.Item
                                                key="Recruitment"
                                                style={{
                                                fontSize: 18
                                            }}>
                                                <Icon type="user-add"/>團隊招募
                                            </Menu.Item>
                                            <Menu.Item
                                                key="Demands"
                                                style={{
                                                fontSize: 18
                                            }}>
                                                <Icon type="pushpin"/>需求討論
                                            </Menu.Item>
                                            <Menu.Item
                                                key="Groups"
                                                style={{
                                                fontSize: 18
                                            }}>
                                                <Icon type="compass"/>討論群組
                                            </Menu.Item>
                                            <Menu.Item
                                                key="home"
                                                style={{
                                                fontSize: 18
                                            }}>
                                                <Icon type="home"/>首頁
                                            </Menu.Item>
                                        </SubMenu>
                                    </Menu>
                                )
                                : (
                                    <Menu
                                        onClick={(e) => this.handleClick(e)}
                                        theme="dark"
                                        mode="horizontal"
                                        defaultSelectedKeys={['home']}
                                        style={{
                                        lineHeight: '96px'
                                    }}>
                                        {this.props.user.user_name
                                            ? <Menu.Item
                                                    key="logout"
                                                    style={{
                                                    float: 'right',
                                                    fontSize: 18
                                                }}>
                                                    {this.props.user.user_name}
                                                    &nbsp;
                                                    <Icon type="logout"/>登出
                                                </Menu.Item>
                                            : <Menu.Item
                                                key="login"
                                                style={{
                                                float: 'right',
                                                fontSize: 18
                                            }}>
                                                <Icon type="github"/>登入
                                            </Menu.Item>
}
                                        <Menu.Item
                                            key="Recruitment"
                                            style={{
                                            float: 'right',
                                            fontSize: 18
                                        }}>
                                            <Icon type="user-add"/>團隊招募
                                        </Menu.Item>
                                        <Menu.Item
                                            key="Demands"
                                            style={{
                                            float: 'right',
                                            fontSize: 18
                                        }}>
                                            <Icon type="pushpin-o"/>需求討論
                                        </Menu.Item>
                                        <Menu.Item
                                            key="Groups"
                                            style={{
                                            float: 'right',
                                            fontSize: 18
                                        }}>
                                            <Icon type="compass"/>討論群組
                                        </Menu.Item>
                                        <Menu.Item
                                            key="home"
                                            style={{
                                            float: 'right',
                                            fontSize: 18
                                        }}>
                                            <Icon type="home"/>首頁
                                        </Menu.Item>
                                    </Menu>
                                )}
                        </Media>
                    </Col>
                </Row>
            </Header>
        )
    }
}

function mapStateToProps(state) {
    return {pages: state.pages, user: state.user}
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators({
            switchPage,
            showLoginModal,
            doLogout
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Headers)