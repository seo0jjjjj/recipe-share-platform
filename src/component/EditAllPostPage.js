import { useContext, useEffect, useState } from "react";
import { UserContext } from "../page/MyPage";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
const style = {
    width: "50px",
    height: "50px",

    ul: {
        padding: "0px",
        marginBottom: "10px",
        backgroundColor: "rgb(241,241,241)",
    },

    li: {
        margin: "0px",
        marginBottom: "20px",
        backgroundColor: "white",
        borderBottom: "2px rgb(221,221,221) solid"

    },
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    columnContainer: {
        paddingLeft: "20px",
        display: "flex",
        height: "100px",
        flexDirection: "column",
        justifyContent: "center",
    },
    image: {
        width: "120px",
        height: "100px",
    },
    author: {
      fontSize : "10px",
      height : "20px",
      flex: 1,
      margin: 0,
    },

    title: {
      flex: 1,
        fontSize: "20px",
        color: "rgb(45,45,45)",
        fontWeight: "700",
      margin: 0,
        
        width: "200px",
    },
    subtitle: {
      margin: 0,
      
        fontSize: "15px",
        color: "rgb(153,153,153)",
        width: "300px",
    },
    oneLineText: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    button: {
        height: "50px",
        alignSelf: "center",
        marginRight: "20px",
    },
    noItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        flexDirection: "column",
        width: "400px",
        height: "400px",
        backgroundColor: "white",
        borderRadius: "25px",
        backgroundPosition: "center",
    }
}


function EditAllPostPage(props) {
    const currentUser = useContext(UserContext);
    const allPosts = JSON.parse(localStorage.getItem("recipes")) ?? new Array();
    const [toShowAllPosts, setToShowAllPosts] = useState(allPosts);  // 모든 포스트가 아닌 해당 작성자가 쓴 글.


    // 글 삭제 이벤트 ( 삭제할 No )
    const onDeleteBtnClicked = (toDeleteNo) => {

        // 사용자 화면에서 글 삭제
        const updatedPost = toShowAllPosts.filter(post => toDeleteNo !== post.No);
        setToShowAllPosts(updatedPost);

        let deleteNo = -1;
        // 전체 글에서 해당 글 삭제
        for(let i =0; i<allPosts.length; i++){
          if(allPosts[i].No !== toDeleteNo) continue;
          deleteNo = i;
        }

        // 글 삭제
        if(deleteNo === -1){
          console.log("[Post] 글 삭제 오류) 해당 아이디에 존재하는 글을 찾을 수 없음.");
        } 
        allPosts.splice(deleteNo,1);
        // 삭제 후 저장 
        localStorage.setItem("recipes",JSON.stringify(allPosts));
    };

    return <div>
        <h2>전체 글 불러오기</h2>
        <ul style={style.ul}>
            {toShowAllPosts?.map(value => {
                return (<li key={value.No} style={style.li}>
                    <div style={style.rowContainer}>
                        <img style={style.image} src={value.imageUrl ?? '/image/empty_image.jpg'} alt={"image"} />
                        <div style={style.columnContainer}>
                        <p style={{ ...style.author, ...style.oneLineText }}>{"작성자:".concat(value.savedUserId)}</p>
                            <p style={{ ...style.title, ...style.oneLineText }}>{value.title}</p>
                            <p style={{ ...style.subtitle, ...style.oneLineText }}>{value.content}</p>
                        </div>
                        <button style={style.button} onClick={() => { onDeleteBtnClicked(value.No) }}>삭제하기</button>
                    </div>
                </li>)
            })}
            {(toShowAllPosts === null || toShowAllPosts?.length === 0) &&
                (<>
                    <div style={style.noItem}>
                        <span className="material-symbols-outlined" style={style.noItemIco}>priority_high</span>
                        <h2>작성한 글이 존재하지 않습니다.</h2>
                    </div>

                </>
                )
            }
        </ul>

    </div >

}
export default EditAllPostPage;