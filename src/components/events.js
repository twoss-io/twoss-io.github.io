import React, {Component} from 'react'
import {Col, Card} from 'antd';
import './events.css'

export default class Events extends Component {
    render() {
        return (
            <div>
                <Col span={6} style={{
                    padding: 16
                }}>
                    <Card
                        style={{
                        width: '100%',
                        height: 300
                    }}
                        bodyStyle={{
                        padding: 0
                    }}>
                        <div
                            className="custom-image"
                            style={{
                            height: 200
                        }}>
                            <div className="custom-img"/>
                        </div>
                        <div className="custom-card">
                            <h3>2017 IDEAS Tech</h3>
                            <p>開源雲端軟體技術應用研討會</p>
                        </div>
                    </Card>
                </Col>
            </div>
        )
    }
}