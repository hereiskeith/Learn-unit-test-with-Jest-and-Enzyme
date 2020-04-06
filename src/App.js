import React, { useState } from 'react';
import Header from "./components/Header";
import Headline from "./components/Headline";
import SharedButton from "./components/Button";
import ListItem from "./components/ListItem";
import './styles.scss';
import { connect } from 'react-redux';
import { fetchPosts } from "./actions";

const tempArr = [
  {
    fName: 'Keith',
    lName: 'Li',
    email: 'hereiskeith@gmail.com',
    age: 26,
    onlineStatus: true
  }
];

function App(props) {

  const [hideBtn, setHideBtn] = useState(false);

  const { fetchPosts, posts } = props;

  const handleClick = () => {
    fetchPosts();
    setHideBtn(true);
  };

  const configButton = {
    buttonText: 'Get Posts',
    emitEvent: handleClick
  };



  return (
    <div data-test='appComponent' className="App">
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='Click the button to render posts' tempArr={tempArr} />
        {!hideBtn && <SharedButton {...configButton} />}
        {posts &&
        <div>
          {posts.map(post => {
            const configListItem = {
              key: post.id,
              title: post.title,
              desc: post.body
            };
            return <ListItem {...configListItem} />
          })}
        </div>
        }
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.post
});

export default connect(mapStateToProps, { fetchPosts })(App);
