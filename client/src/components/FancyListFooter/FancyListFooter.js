import React from 'react';
import {Tag} from "antd";
import "./FancyListFooter.css";

const FancyListFooter = (props) => (
    <div className="FancyListFooter">
        <h3>Collaborators</h3>
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
        </div>  
    </div>
)

export default FancyListFooter;

                      