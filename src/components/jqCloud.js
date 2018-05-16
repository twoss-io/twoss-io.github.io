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
        
    }

    componentDidMount() {
        
    }

    componentWillReceiveProps(nextProps){
        let words = []
        nextProps.item.forEach(item => {
            if (item.name === 'twoss-io.origin' ||item.name === 'issues-testing' || item.name === 'twoss-io-videocms-demo' || item.name === 'Main' || item.name === 'demand' || item.name === 'recruitment') {} else {
                words.push({
                    text: item.description || item.name,
                    weight: new Date(item.updated_at).getTime()
                })
            }
        });

        this.initCloud(words)
    }

    initCloud=(words)=>{
        $('#cloud').jQCloud(words, {
            // colors:['#fff', '#FA9513','#FFC06E','#FA9513','#4F8AAB','#83CEF7'],
            colors: ['#fff'],
            height: 260,
            delay: 10,
            autoResize: true
        });
        $('#cloud').addClass('bounceIn')
    }

    render() {
        return (
            <div>
                <div id="cloudDiv"> 
                    <div id="cloudOuter">
                        <div id="cloud" ref="cloud" className="animated"></div>
                    </div>
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