import React, {Component} from 'react';
import {
    Icon,
    Card,
    Row,
    Col,
    Tag,
    Button
} from 'antd';

import $ from 'jquery'

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

class LoginMod extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            null
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {pageActions: bindActionCreators({}, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginMod)