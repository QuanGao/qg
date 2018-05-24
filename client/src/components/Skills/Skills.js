import React from 'react'
// import { Layout, Menu, Breadcrumb, Icon, Col, Row } from 'antd';
import { Layout, Icon} from 'antd';
import "./Skills.css";
import MyFooter from "../MyFooter"
import data from "./data.json";
import {Treemap} from "recharts";

const { Header, Content, Footer} = Layout;
const COLORS = ['#f38c74','#F8C12D', '#64c195', '#8889DD'];

class CustomizedContent extends React.Component{
  render() {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name,fontSize } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth <2 ? colors[Math.floor(index / root.children.length * 4)] : 'none',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {
          depth > 1 ?
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
            fontSize={fontSize? fontSize:14}
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
            {index + 1}{`. `+name}
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
        <Layout className="content-wrapper">
            <Header style={{ background: '#fff', padding: 0 }}> 
                <h1> MY TOOLBOX <Icon type="gift" /></h1>
            </Header>
            <Content>
                <div>
                    <Treemap
                        width={800}
                        height={450}
                        data={data}
                        dataKey="size"
                        ratio={4/3}
                        stroke="#fff"
                        fill="#D3D3D3"
                        content={<CustomizedContent colors={COLORS}/>}
                    />
                </div> 
            </Content>
            <MyFooter/> 
        </Layout>
    );
  }
};

export default SimpleTreemap 