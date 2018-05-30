import React from 'react';
import {Tag} from "antd";
import "./FancyListFooter.css";

const FancyListFooter = (props) => (
    <div className="FancyListFooter">
        <h3>Collaborators</h3>
        <p>
            <a href="#TProject0"><Tag color="green">RoomieU </Tag></a>
            Michelle Yuen, Sean Arca, Amy Carrillo, Zach Pleasant
        </p>
        <p>
            <a href="#TProject1"><Tag color="red">GetAway </Tag></a>
            Michelle Yuen, Sean Arca, Amy Carrillo
        </p>
        <p>
            <a href="#TProject2"><Tag color="blue">Dinner Savior </Tag></a>
            Ryan Park, Luis Rosales, Peter Juffernbruch
        </p>  
    </div>
)

export default FancyListFooter;

                      