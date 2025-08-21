import { CommentType } from "@/types/commentType";
import { getRelativeTime } from "@/utils/timeFormat";
import CommentDeleteBtn from "./CommentDeleteBtn";
import CommentLike from "./CommentLike";

const CommentBox = ({ comments }: { comments: CommentType[] }) => {
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 mb-5">
        {comments.map((comment: CommentType) => (
          <li
            key={comment.id}
            className="px-4 py-4 flex flex-col gap-3 bg-white/10 border border-white/30 rounded-[20px]"
          >
            <article className="relative flex items-center justify-between">
              <p className="text-xs tablet:text-sm">{comment.nickname}</p>
              <CommentDeleteBtn commentId={comment.id} />
            </article>
            <p className="text-xs tablet:text-sm pc:text-base whitespace-pre-wrap">
              {comment.text}
            </p>
            <article className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <time className="opacity-50 text-sm">{getRelativeTime(comment.createdAt)}</time>
              </div>
              <CommentLike like={comment.like} commentId={comment.id} />
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommentBox;
