import React from 'react'
import { List, Avatar, Button, Spin, Icon, Divider} from 'antd';
import "./LoadMoreList.css"
import axios from 'axios';
import API from "../../utils/API"
import profile from "./images/quan.jpg"

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

let batch = 0;
class LoadMoreList extends React.Component {
    state = {
        loading: true,
        loadingMore: false,
        showLoadingMore: true,
        data: []
    }


    componentDidMount(){
        API.getSProjectData().then(        
            projectData=>{
                this.setState({
                    data: projectData.data,
                    loading: false,
                })
            }
        )
    }
    // componentDidMount() {
    //     this.getData((res) => {
    //     this.setState({
    //         loading: false,
    //         data: res
    //     });
    //     });
    // }
    getData = (callback) => {
        batch++;
        // const res = this.props.data.slice(0, batch*5)
        // console.log(this.props.data)
        // const maxBatches = Math.ceil(this.props.data.length/5);
        // if(batch===maxBatches){
        //     this.setState({
        //         showLoadingMore:false
        //     })
        // }
        // callback(res)
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
          <List.Item actions={[<a href={item.pageLink}><Icon type={item.pageLink?"play-circle-o":"minus-circle-o"}/></a>,
                                <a href={item.codeLink}><Icon type="code-o"/></a>]}>
            <List.Item.Meta
              avatar={<Avatar src={profile} />}            
              title={<a href={item.pageLink ||item.codeLink }>{item.title}</a>}
              description={item.description}
            />
            <div>
                <IconText type="star-o" text={item.stars} /> <Divider type="vertical"/>
                <IconText type="like-o" text={item.likes} /> <Divider type="vertical"/>
                <IconText type="message" text={item.notes.length} />
            </div>
          </List.Item>
        )}
      />
    );
  }
}

export default LoadMoreList;

                      