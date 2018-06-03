import React from 'react'
import { Select, Button} from 'antd';

import "./SortBtn.css";

const Option = Select.Option;
const ButtonGroup = Button.Group;

// function handleChange(value) {
//     console.log(`selected ${value}`);
// } onChange={handleChange}

class SortBtn extends React.Component { 
    render() {
        return (
            <div>
                <b> Sort by </b>
                <Select defaultValue="date" style={{ width: 100 }} onChange={this.props.handleSortParamChange}>
                    <Option value="likes">like</Option>
                    <Option value="stars">star</Option>
                    <Option value="notes">comment</Option>
                    <Option value="builtDate">date</Option>
                </Select>
                {' '}
                <ButtonGroup>
                    <Button onClick={() => this.props.handleSort(false, this.props.sortParam)} type="dashed" icon="up" />
                    <Button onClick={() => this.props.handleSort(true, this.props.sortParam)} type="dashed" icon="down" />
                </ButtonGroup>
          </div>
        );
    }
}



export default SortBtn;
