import React,{useEffect} from 'react'
import {
  Container,
  Button,
  Form,
  Row,
  Col,
  Card,
  Spinner
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import FooterBlog from 'components/Footers/FooterBlog';
import {connect} from 'react-redux'
import BigBlockPost from './BigBlockPost';
import ThumbnailBlogPost from './ThumbnailBlogPost';
import DemoNavbar from 'components/Navbars/DemoNavbar'

function Weblog({ FeachBlogPosts, FeachSinglePosts, Posts, SingelPost }) {
  useEffect(() => {
    const getData = async () => {
      await FeachBlogPosts();
      await FeachSinglePosts();
    };
    getData();
  }, []);
  const RenderBlogPostBigBlock = () => {
    if (SingelPost.length && Posts) {
      let ImageArray = Posts.data.map((itme, index) => {
        return itme.image;
      });
      return SingelPost.map((itme, index) => {
        if (index <= 5) {
          return (
            <BigBlockPost postData={itme} image={ImageArray[index]} />
          );
        }
      });
    }else{
      return (
        <Card>
          <div className="text-center pt-3">
            <Spinner animation="border" variant="divar-color" size="lg"/>
          </div>
        </Card>
      );
    }
  };
  const RenderSinglePostBlog = () => {
    if (SingelPost.length && Posts) {
      let ImageArray = Posts.data.map((itme, index) => {
        return itme.image;
      });
      return SingelPost.map((itme, index) => {
       if (index <= 5) {
         return <ThumbnailBlogPost postData={itme} image={ImageArray[index]} />;
       }
      });
    }
    else{
      return (
        <div className="text-center pt-5">
          <Spinner animation="border" variant="divar-color" />
        </div>
      );
    }
  };
  return (
    <section className="weblog-section">
      <DemoNavbar />
      <div className="header">
        <h2 className="divar-color">وبلاگ سایت رادمانی شو</h2>
      </div>
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <div className="leftcolumn">
            <div className="card">
              <h2 className="blog-title-divar">آخرین مقالات</h2>
            </div>

            {RenderBlogPostBigBlock()}
          </div>
          <div className="rightcolumn">
            <div className="card">
              <h2 className="blog-title-divar">درباره وبلاگ</h2>
              <div className="fakeimg">
                <img
                  className="img-fluid"
                  src={require("assets/img/divar/diva-about.jpg")}
                  alt=""
                />
              </div>
              <p className="text-justify px-2">
                بلاگ رادمانی شو در تلاش است تا با ارتقا دانش کاربران خود، در بهبود
                تجربه کاربران در استفاده از رادمانی شو تأثیرگذار باشد.
                <br />
                شما می‌توانید با مطالعه روزانه این بلاگ ضمن انجام معاملاتی بهتر
                و دقیق‌تر، از آخرین تحولات در سایت رادمانی شو نیز مطلع شوید.
              </p>
            </div>
            <div className="card">
              <h3 className="blog-title-divar">رادمانی شو پلاس</h3>
              <div className="post-content-wrapper">
                {RenderSinglePostBlog()}
              </div>
            </div>
            <div className="card">
              <h3 className="blog-title-divar">
                دنبال کردن رادمانی شو در شبکه های اجتماعی
              </h3>
              <div className="social-network-blog-sidebar ">
                <Row className="d-flex justify-content-center">
                  <Col className=" text-lg-center btn-wrapper">
                    <a
                      className="social-btn-blog"
                      // href="https://twitter.com/divar"
                      target="_blank"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      className="social-btn-blog"
                      // href="https://www.facebook.com/divar"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                    </a>

                    <a
                      className="social-btn-blog"
                      // href="https://youtube.com/divar"
                      target="_blank"
                    >
                      <i className="fa fa-youtube-play" />
                    </a>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <FooterBlog />
    </section>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    FeachBlogPosts: payload => {
      dispatch({
        type: "GET_BLOG_POST_DATA",
        payload
      });
    },
    FeachSinglePosts: payload => {
      dispatch({
        type: "GET_SINGLE_BLOG_POST_DATA",
        payload
      });
    }
  };
};

const mapStateToProps = state => {
  let { DivarApi } = state;
  return {
    Posts: DivarApi.BlogPosts.data,
    SingelPost: DivarApi.SingleBlogPosts,
    token: DivarApi.tokenpost
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Weblog);