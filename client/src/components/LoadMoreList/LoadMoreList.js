import React from 'react'
import { List, Avatar, Button, Spin, Icon, Divider} from 'antd';
import "./LoadMoreList.css"
import axios from 'axios';
import API from "../../utils/API"
import profile from "./images/quan.jpg"
import scrollToComponent from 'react-scroll-to-component';
import CommentBtn from "../CommentBtn";
import LikeBtn from "../LikeBtn"

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
        data: [],
        dataToLoad: []
    }

    componentDidMount(){
        API.getSProjectData().then(        
            projectData=>{
                this.setState({
                    data: projectData.data,
                    loading: false,
                }, () => this.getDataToLoad(
                    (res)=>this.setState({
                        dataToLoad: res
                    })
                ))
            }
        )
    }

    getDataToLoad = (callback) => {
        batch++;
        const res = this.state.data.slice(0, batch*5)
        console.log(this.state.data)
        const maxBatches = Math.ceil(this.state.data.length/5);
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
    scrollToComponent(this.messagesEnd, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  };

  onLoadMore = () => {
    this.setState({
      loadingMore: true,
    });
    this.getDataToLoad((res) => {
      this.setState({
        dataToLoad: res,
        loadingMore: false,
      }, () => {
        this.scrollToView();
        window.dispatchEvent(new Event('resize'));
      });
    });
  }
  render() {
    const { loading, loadingMore, showLoadingMore, dataToLoad} = this.state;
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
        dataSource={dataToLoad}
        renderItem={(item) => (
          <List.Item actions={[<a href={item.pageLink}><Icon type={item.pageLink?"play-circle-o":"minus-circle-o"}/></a>,
                                <a href={item.codeLink}><Icon type="code-o"/></a>]}>
            <List.Item.Meta
              avatar={<Avatar src={profile} />}            
              title={<a href={item.pageLink ||item.codeLink }>{item.title}</a>}
              description={item.description}
            />
            <div>
                <IconText type="star-o" text={item.stars} /> <Divider type="vertical"/>
                {/* <IconText type="like-o" text={item.likes} /> <Divider type="vertical"/> */}
                <LikeBtn projectId={item._id}/> <Divider type="vertical"/>
                <CommentBtn projectId={item._id}/>
            </div>
          </List.Item>
        )}
      />
    );
  }
}

export default LoadMoreList;

                      