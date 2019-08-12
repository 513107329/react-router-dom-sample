import React, { Component } from 'react'
import { Icon } from 'antd'
import styles from './index.module.scss'
const res = require("./demo.json");

export default class demo extends Component {

    state = {
        data: [],
        selectKey: ""
    }

    componentDidMount() {
        this.setState({
            data: JSON.parse(JSON.stringify(res))
        })
    }

    dataInactive(data, item) {
        return data.map(value => {
            if (item.id === value.id) value.active = true;
            else value.active = false;
            if (value.children && value.children.length > 0) {
                value.children = this.dataInactive(value.children, item)
            }
            if(value.member && value.member.length > 0) {
                value.member = this.dataInactive(value.member, item)
            }
            return value
        })
    }

    onClick = (e, item) => {
        e.stopPropagation();
        const { data } = this.state;
        const allData = JSON.parse(JSON.stringify(data));
        const lastData = this.dataInactive(allData, item);
        this.setState({ data: lastData })
    }

    iconClick = (e, item) => {
        e.stopPropagation();
        if (item.children) item.expanded = !item.expanded;
        this.setState({})
    }

    renderOrg = (result, idx = 0) => {
        return result.map((item) => {
            return (
                <li onClick={(e) => this.onClick(e, item)} className={`${item.active ? styles.active : ''} ${item.expanded ? styles.expanded : ''}`}>
                    <div className={styles.title} key={item.pinyin} style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
                        <div>
                            <span className={styles.icon}><Icon type="check-circle" theme="filled" /></span>
                            <span style={{ paddingLeft: idx * 10 }}>{item.username}</span>
                        </div>
                        {item.children ? <Icon type="right" className={styles.arrowIcon} onClick={(e) => this.iconClick(e, item)} /> : null}
                    </div>
                    {
                        item.member || item.children ? (
                            <ul>
                                {
                                    this.renderOrg(item.member || item.children, ++idx)
                                }
                            </ul>
                        ) : null
                    }
                </li>
            )
        })
    }

    render() {
        const { data = [] } = this.state;
        return (
            <div style={{ width: 208 }}>
                <ul>
                    {
                        this.renderOrg(data)
                    }
                </ul>
            </div>
        )
    }
}
