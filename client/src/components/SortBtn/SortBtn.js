import React from 'react'
import { Select, Button} from 'antd';
import "./SortBtn.css";

const Option = Select.Option;
// const ButtonGroup = Button.Group;

class SortBtn extends React.Component { 
    render() {
        return (
            <div className="sortBtnDiv">
                {/* <b className="sortByText"> Sort by </b>  */}
                <Select defaultValue="date" style={{ width: 150, marginRight:5 }} onChange={this.props.handleSortParamChange}>
                {/* <Select style={{ width: 110, marginRight:5 }} onChange={this.props.handleSortParamChange}>     */}
                    <Option value="likes">Most likes</Option>
                    <Option value="stars">Most stars</Option>
                    <Option value="notes">Most comments</Option>
                    <Option value="date">Most recent</Option>
                </Select>
               {/* {' '}
                <ButtonGroup>
                    <Button onClick={() => this.props.handleSort(false, this.props.sortParam)} type="dashed" icon="up" />
                    <Button onClick={() => this.props.handleSort(true, this.props.sortParam)} type="dashed" icon="down" />
                </ButtonGroup> */}
          </div>
        );
    }
}



export default SortBtn;
