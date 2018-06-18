import React from 'react'
import { Select} from 'antd';
import "./SortBtn.css";
const Option = Select.Option;


class SortBtn extends React.Component { 
    render() {
        return (
            <Select
            className="sortSelect" 
            defaultValue="date" 
            style={{ width: 150, marginRight:5 }} 
            onChange={this.props.handleSortParamChange}
            >
                <Option value="likes">Most likes</Option>
                <Option value="stars">Most stars</Option>
                <Option value="notes">Most comments</Option>
                <Option value="date">Most recent</Option>
            </Select>
        );
    }
}

export default SortBtn;
