"use client";
import React from "react";
import Link from "next/link";

import MainHeader from "../MainPage/Header/MainHeader";
import styles from "./Borad.module.css";
import BoardPostList from "./BoardPost/BoardPostList";

import { MdSearch, MdSort, MdArrowBack, MdArrowForward } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function Borad() {
  return (
    <div className={styles.layout}>
      <MainHeader />

      <main className={styles.mainLayout}>
        <div className={styles.emptybox} />
        <div className={styles.flexbox1}>광고창</div>

        <div className={styles.boardLayout}>
          <div className={styles.molla}>?</div>

          <div className={styles.boardName}>자유 게시판</div>

          <div className={styles.postMenu1}>
            <Link href="/NewPost" style={{textDecoration:'none'}}>
              <button className={styles.postBtn}>
                글쓰기
                <CiEdit size={22} />
              </button>
            </Link>
            <div className={styles.hashTags}>
              <p>#해시태그1</p>
              <p>#해시태그2</p>
              <p>#해시태그3</p>
              <p>#해시태그4</p>
            </div>
            <button className={styles.sortBtn}>
              <MdSort size={22} />
              최신순
            </button>
          </div>

          <div className={styles.postMenu2}>
            <span className={styles.search}>
              <button type="button" className={styles.searchIcon}>
                <MdSearch size={18} />
              </button>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="검색"
              />
            </span>

            <div className={styles.boardPage}>
              <p>1 / 992</p>
              <button className={styles.pageBtn}>
                <MdArrowBack />
              </button>
              <button className={styles.pageBtn}>
                <MdArrowForward />
              </button>
            </div>
          </div>

          <div className={styles.postList}>
            <BoardPostList />
          </div>

          <div className={styles.postPage}>
            <div>
              <MdArrowBack />
              Previous
            </div>
            <div>1 2 3 4 5 6 7 8 9... 999</div>
            <div>
              Next
              <MdArrowForward />
            </div>
          </div>
        </div>

        <div className={styles.flexbox2}>광고창</div>
        <div className={styles.emptybox} />
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default Borad;
