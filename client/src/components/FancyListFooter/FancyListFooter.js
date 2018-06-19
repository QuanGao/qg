import React from 'react';
import {Tag} from "antd";
import "./FancyListFooter.css";

const renderTeamMates = (page) => {
    switch(page){
        case 1:
            return <span>Michelle Yuen, Sean Arca, Amy Carrillo, Zach Pleasant</span>
        case 2:
            return <span>Michelle Yuen, Sean Arca, Amy Carrillo</span> 
        case 3:
            return <span>Ryan Park, Luis Rosales, Peter Juffernbruch</span> 
        default:
            return <span>Awesome team mates</span>
    }
}


const FancyListFooter = (props) => (
    <div className="FancyListFooter">
        <Tag> Team </Tag>
        {renderTeamMates(props.page)}

        {/* <h3>Collaborators</h3>
        <div>
            <a href="#TProject0"><Tag color="green">RoomieU </Tag></a>
            Michelle Yuen, Sean Arca, Amy Carrillo, Zach Pleasant
        </div>
        <div>
            <a href="#TProject1"><Tag color="red">GetAway </Tag></a>
            Michelle Yuen, Sean Arca, Amy Carrillo
        </div>
        <div>
            <a href="#TProject2"><Tag color="blue">Dinner Savior </Tag></a>
            Ryan Park, Luis Rosales, Peter Juffernbruch
        </div>   */}
    </div>
)

export default FancyListFooter;

                      