type PostType = {
  parentId?: number;
  typeId: number;
  title: string;
  body: string;
  isHide: number;
  isAnonymous: number;
  imagesUrl?: string[];
  tagNames?: string[];
};

type readPostType = {
  board: {
    id: number;
    parentId: null;
    categoryId: number;
    userId: number;
    typeId: number;
    title: string;
    body: string;
    state: number;
    isHide: number;
    isComplete: number;
    isAnonymous: number;
    createdAt: string;
    modifiedAt: string;
    commentCnt: number;
    likeCnt: number;
    reportCnt: number;
    imagesUrl?: string[];
    isLike: boolean;
    isMyBoard: boolean;
    tags: { id: number; name: string }[];
    userNickname: string;
    isBookmarked: boolean;
  };
  answerList: null;
};
type HotPost = {
  list: {
    boardId: number;
    title: string;
    type: string;
    typeId: number;
    userNickname: string;
    likeCnt: number;
    commentCnt: number;
  }[];
};
type EditType = {
  id: number;
  title: string;
  body: string;
  isHide: number;
  imagesUrl?: string[];
  tags?: string[];
};

export type { PostType, readPostType, EditType, HotPost };
