import React, {Component} from 'react'
import {Anchor} from 'antd';
import './myAnchor.css'

const {Link} = Anchor

export default class MyAnchor extends Component {
    render() {
        return (
            <div className={'anchorBlock'}>
                <div className={'anchorBody'}>
                <Anchor offsetTop={96}>
                    <Link href="#recent" title="近期活動"/>
                    <Link href="#hot" title="熱門討論"/>
                    <Link href="#links" title="相關連結"/>
                    <Link href="#about" title="關於我們"/>
                    <Link href="#event" title="活動集錦"/>
                    <Link href="#contact" title="聯絡我們"/>
                </Anchor>
                </div>
            </div>
        )
    }
}