import React from 'react'
import { Input, List, Divider } from 'antd'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                '今天要学习英语',
                '还要学习数学'
            ],
            inputValue: ''
        }

        this.handleBtnDelete = this.handleBtnDelete.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
    }

    handleBtnClick(value) {
        this.setState({
            data: [...this.state.data, value],
            inputValue: ''
        })
    }

    handleBtnDelete(index) {
        const data = [...this.state.data]
        data.splice(index, 1)
        this.setState({ data })
    }

    render() {
        return (
            <div>
                <Input.Search placeholder="输入任务" enterButton="增加" size="large" onSearch={this.handleBtnClick}></Input.Search>
                <Divider orientation="left">下面是任务列表</Divider>
                <List bordered dataSource={this.state.data}
                    renderItem={(item, index) => (<TodoItem delete={this.handleBtnDelete} content={item} key={index} index={index} />)}
                />
            </div>
        )
    }
}

export default TodoList