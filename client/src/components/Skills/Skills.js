import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Col, Row } from 'antd';
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
        <Layout className="content-wrapper">
            {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
            {/* <Content style={{ margin: '0 16px' , background: '#fff'}}> */}
            <Header style={{ background: '#fff', padding: 0 }}> 
                <h1> M Y  S K I L L S</h1>
            </Header>
            <Content>
                {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}> */}
                <div>
                    <Treemap
                        // width={400}
                        // height={200}
                        width={950}
                        height={475}
                        data={data}
                        dataKey="size"
                        ratio={4/3}
                        stroke="#fff"
                        fill="#8884d8"
                        content={<CustomizedContent colors={COLORS}/>}
                    />



                </div> 
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Quan Gao ©2018 Web development Portfolio
            </Footer> 
        </Layout>
        // <div className="skills-container">
        //     <Row>
        //         <h1>S K I L L S</h1>
        //     </Row>
        //     <Row>
        //         <Col span={24}>
        //             <Treemap
        //             // width={400}
        //             // height={200}
        //             width={800}
        //             height={400}
        //             data={data}
        //             dataKey="size"
        //             ratio={4/3}
        //             stroke="#fff"
        //             fill="#8884d8"
        //             content={<CustomizedContent colors={COLORS}/>}
        //             />
        //         </Col>
        //     </Row>
    
    //   </div>
    );
  }
};

export default SimpleTreemap 