const AllowPageLink = [
  "Free",
  "Knowledge",
  "QnA",
  "Career",
  "Promotion",
  "Hobby",
];
export const BoardInfo = {
  getBoardId(boardLink: string): number {
    if (boardLink === "Free") return 1;
    else if (boardLink === "QnA") return 2;
    else if (boardLink === "Knowledge") return 3;
    else if (boardLink === "Career") return 4;
    else if (boardLink === "Promotion") return 5;
    else if (boardLink === "Hobby") return 6;
    else return 0;
  },

  getBoardName(boardLink: string): string {
    if (boardLink === "Free") return "자유게시판";
    else if (boardLink === "QnA") return "QnA";
    else if (boardLink === "Knowledge") return "지식게시판";
    else if (boardLink === "Career") return "취업/진로";
    else if (boardLink === "Promotion") return "홍보게시판";
    else if (boardLink === "Hobby") return "취미";
    else return "게시판";
  },
  getBoardText(boardLink: string): string {
    if (boardLink === "Free") return "자유롭게 글을 작성하세요";
    else if (boardLink === "QnA") return "궁금한 것을 물어보세요";
    else if (boardLink === "Knowledge") return "지식을 공유해보세요";
    else if (boardLink === "Career")
      return "우리과의 취업 진로에 대해 글을 쓰세요";
    else if (boardLink === "Promotion") return "여러가지를 홍보해보세요";
    else if (boardLink === "Hobby") return "취미를 공유해보세요";
    else return "게시판 주소가 잘못되었습니다.";
  },
  URL_Check(boardLink: string):boolean {
    return !AllowPageLink.includes(boardLink);
  },
};
