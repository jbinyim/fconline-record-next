import { CommentType } from "@/types/commentType";
import { getRelativeTime } from "@/utils/timeFormat";

const CommentBox = ({ comments }: { comments: CommentType[] }) => {
  return (
    <ul className="grid grid-cols-1 gap-4 mb-5">
      {comments.map((comment: CommentType) => (
        <li
          key={comment.id}
          className="px-4 py-4 flex justify-between bg-white/10 border border-white/30 rounded-[20px]"
        >
          <div className="w-[80%] flex items-center gap-10">
            <p className="text-xs tablet:text-sm">{comment.nickname}</p>
            <p className="text-xs tablet:text-sm pc:text-base">{comment.text}</p>
          </div>
          <button className="flex items-center gap-1">
            <img src="/icons/thumb.png" alt="좋아요" className="h-3.5" />
            <p className="text-sm align-middle">{comment.like}</p>
          </button>
          <div className="flex items-center gap-2">
            <time className="opacity-50 text-sm">{getRelativeTime(comment.createdAt)}</time>
            <button type="button" className="text-red100 text-xs">
              삭제
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentBox;
