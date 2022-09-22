import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  // const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      {/* управляемый компонент */}
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="post title"
      ></MyInput>
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="post description"
      ></MyInput>

      {/* не управляемый инпут, делаем с помощью useRef
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="post description"
        ></MyInput> */}
      <MyButton onClick={addNewPost}>Create a post</MyButton>
    </form>
  );
};

export default PostForm;

// import MyButton from './components/UI/button/MyButton';
// import MyInput from './components/UI/input/MyInput';
