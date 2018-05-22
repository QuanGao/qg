import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import "./Skills.css";
import MyFooter from "../MyFooter"
import data from "./data.json";
import {Treemap} from "recharts"

const { Header, Content, Footer} = Layout;

const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

class CustomizedContent extends React.Component{
  render() {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor(index / root.children.length * 6)] : 'none',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {
          depth === 1 ?
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
            fontSize={14}
          >
            {name}
          </text>
          : null
        }
        {
          depth === 1 ?
          <text
            x={x + 4}
            y={y + 18}
            fill="#fff"
            fontSize={16}
            fillOpacity={0.9}
          >
            {index + 1}
          </text>
          : null
        }
      </g>
    );
  }
};

class SimpleTreemap extends React.Component{
	render () {
  	return (
        <div>
            <Treemap
            // width={400}
            // height={200}
            width={800}
            height={400}
            data={data}
            dataKey="size"
            ratio={4/3}
            stroke="#fff"
            fill="#8884d8"
            content={<CustomizedContent colors={COLORS}/>}
        />
      {/* <MyFooter backgroundColor=""/> */}
      </div>
    );
  }
};

export default SimpleTreemap 