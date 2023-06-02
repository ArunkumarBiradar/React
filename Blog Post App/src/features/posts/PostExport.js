import AuthorName from "./AuthorName";
import TimeAlgorithm from "./TimeAlgorithm";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';

const PostExport = ({
  post
}) => {
  return <article>
            <h2>{post?.title}</h2>
            <p className="excerpt">{post.body?.substring(0, 75)}...</p>
            <p className="postCredit">
                <Link to={`post/${post?.id}`}>View Post</Link>
                <AuthorName userId={post.userId} />
                <TimeAlgorithm timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>;
};

export default PostExport;