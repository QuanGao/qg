import React from 'react'
import { List, Avatar, Button, Spin } from 'antd';
import "./LoadMoreList.css"
import axios from 'axios';
import SProjects from "./SProjects.json"

const maxBatches = Math.ceil(SProjects.length/5);
let batch = 0;
class LoadMoreList extends React.Component {
  state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true,
    data: []
  }
  componentDidMount() {
    this.getData((res) => {
      this.setState({
        loading: false,
        data: res
      });
    });
  }
  getData = (callback) => {
        batch++;
        const res = SProjects.slice(0, batch*5)
        if(batch===maxBatches){
            this.setState({
                showLoadingMore:false
            })
        }
        callback(res)
  }

  scrollToTop = () => {
    window.scrollTo(0, 0)
  };
  scrollToView = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  onLoadMore = () => {
    this.setState({
      loadingMore: true,
    });
    this.getData((res) => {
      this.setState({
        data: res,
        loadingMore: false,
      }, () => {
        this.scrollToView();
        window.dispatchEvent(new Event('resize'));
      });
    });
  }
  render() {
    const { loading, loadingMore, showLoadingMore, data } = this.state;
    const loadMore = 
      <div ref={(el) => { this.messagesEnd = el; }} style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        {showLoadingMore ? (loadingMore ? <Spin />:
        <Button onClick={this.onLoadMore}>loading more</Button>):
        (<Button onClick={this.scrollToTop}>back to top</Button>)}
      </div>
    return (
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={data}
        renderItem={item => (
          <List.Item actions={[<a>edit</a>, <a>more</a>]}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </List.Item>
        )}
      />
    );
  }
}

export default LoadMoreList;

                      