import React, {Component} from 'react';

import $ from 'jquery'
import 'jqcloud2'

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

import './jqCloud.css'


class JQCloud extends Component {
    constructor(props) {
        super(props)
        this.state ={
           words:[]
        }
    }

    componentWillMount() {
        let words = []
        this.props.item.forEach(item => {
            if (item.name == 'issues-testing' || item.name == 'twoss-io-videocms-demo' || item.name == 'Main' || item.name == 'demand' || item.name == 'recruitment') {} else {
                words.push({
                    text: item.description || item.name,
                    weight: item.open_issues_count
                })
            }
        });
        this.setState({
            words:words
        })
    }

    componentDidMount() {
        this.initCloud()
    }

    componentDidUpdate(){
        
    }

    initCloud=()=>{
        $(this.refs.cloud).jQCloud(this.state.words, {
            // colors:['#FA9513','#FFC06E','#FA9513','#4F8AAB','#83CEF7'],
            colors: ['#fff'],
            height: 300,
            delay: 10,
            autoResize: true
        });
        $(this.refs.cloud).addClass('bounceIn')
    }

    render() {
        return (
            <div>
                <div id="cloudDiv"> 

                </div>
                <div id="cloudOuter">
                    <div ref="cloud" className="animated"></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {pageActions: bindActionCreators({}, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(JQCloud)