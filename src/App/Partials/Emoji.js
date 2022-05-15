import React from 'react'

const Emoji = ({click, show}) => {
  return (
    <div className="wrap emojis-main">
        <div className={`emojis-contain ${show ? "open" : ""}`}>
            <div className="emojis-sub-contain custom-scroll">
                <ul onClick={(e) => {
                    console.log(e);
                    click(e)}}>
                <li>😀</li>
                <li>😁</li>
                <li>😂</li>
                <li>😃</li>
                <li>😄</li>
                <li>😅</li>
                <li>😆</li>
                <li>😇</li>
                <li>😈</li>
                <li>😉</li>
                <li>😊</li>
                <li>😋</li>
                <li>😌</li>
                <li>😍</li>
                <li>😎</li>
                <li>😏</li>
                <li>😐</li>
                <li>😑</li>
                <li>😒</li>
                <li>😓</li>
                <li>😔</li>
                <li>😕</li>
                <li>😖</li>
                <li>😗</li>
                <li>😘</li>
                <li>😙</li>
                <li>😚</li>
                <li>😛</li>
                <li>😜</li>
                <li>😝</li>
                <li>😞</li>
                <li>😟</li>
                <li>😠</li>
                <li>😡</li>
                <li>😢</li>
                <li>😣</li>
                <li>😥</li>
                <li>😦</li>
                <li>😧</li>
                <li>😨</li>
                <li>😩</li>
                <li>😪</li>
                <li>😫</li>
                <li>😭</li>
                <li>😮</li>
                <li>😯</li>
                <li>😰</li>
                <li>😱</li>
                <li>😲</li>
                <li>😳</li>
                <li>😴</li>
                <li>😵</li>
                <li>😶</li>
                <li>😷</li>
                <li>😸</li>
                <li>😹</li>
                <li>😺</li>
                <li>😻</li>
                <li>😼</li>
                <li>😽</li>
                <li>😾</li>
                <li>🙀 </li>
                <li>🙃 </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Emoji
