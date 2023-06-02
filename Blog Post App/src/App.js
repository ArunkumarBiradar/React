import PostsList from "./features/posts/PostsList";
import NewPostForm from "./features/posts/NewPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import PostEditForm from "./features/posts/PostEditForm";
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<NewPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<PostEditForm />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
