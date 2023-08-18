type CommentType = {
  list: CommentDetail[];
  pagination: {
    totalRecordCount: number;
    totalPageCount: number;
    startPage: number;
    endPage: number;
    limitStart: number;
    existPrevPage: Boolean;
    existNextPage: Boolean;
  };
};
type CommentDetail = {
  id: number;
  user_id: number;
  nickname: string;
  board_id: number;
  body: string;
  is_anonymous: boolean;
  created_at: string;
  modified_at: null;
  like_cnt: number;
  comment_id: number;
  time: string;
};

export type { CommentType, CommentDetail };
