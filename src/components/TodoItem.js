import React, {Component} from 'react'
import { List, Popconfirm, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

class TodoItem extends Component {

    constructor(props) {
        super(props)

        this.handleBtnDelete = this.handleBtnDelete.bind(this)
    }

    handleBtnDelete() {
        this.props.delete(this.props.index)
    }

    render() {
        return (
            <List.Item actions={[
                <Popconfirm title="Delete?"
                    onConfirm={this.handleBtnDelete}
                    okText="残忍删除"
                    cancelText="算了，留着吧！"
                    icon={<DeleteOutlined style={{ color: 'red' }} />}
                >
                    <Button danger>删除</Button>
                </Popconfirm>]}>{this.props.content}
            </List.Item>
        )
    }
}

export default TodoItem