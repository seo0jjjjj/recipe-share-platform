import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './page/LoginForm';
import SignUpForm from './page/SignUpForm';
import Posts from './component/Posts';
import EditProfile from './component/EditProfile';
import { MyPage } from './page/MyPage';
import WritingPage from './page/WritingPage';
import FoodCategory from './css/FoodCategory';
import Main from './page/Main';
import UnderMenu from './page/UnderMenu';
import { initUesrData } from './domain/userData';
import EditAllPostPage from './component/EditAllPostPage';
import UserEditForm from './page/UserEditForm';
import { initPostData } from './domain/postData';
import RecipeDetailPage from './page/RecipeDetailPage';
import AccountFindForm from './page/AccountFindForm';


// git test
function App() {
  initUesrData();
  initPostData();
  return (<>

    <Routes>
      <Route path="/login" element={<LoginForm />} /> {/* 로그인 페이지 라우트 추가 */}
      <Route path="/signup" element={<SignUpForm />} /> {/* 회원가입 페이지 라우트 추가 */}
      <Route path="/accountfind" element={<AccountFindForm />} /> {/* 아이디/비밀번호 찾기 페이지 라우트 추가 */}


      <Route element={<UnderMenu />}>
        {/* 필요에 따라 더 많은 라우트를 추가할 수 있습니다 */}
        <Route path="/" element={<Main />} /> {/* 회원가입 페이지 라우트 추가 */}
        <Route path='/foodcategory' element={<FoodCategory />} />
        <Route path='/Writingpage' element={<WritingPage />} />

        {/* 마이페이지 추가*/}
        <Route path="/mypage" element={<MyPage />}>
          <Route path="posts" element={<Posts />} />
          <Route path="EditProfile" element={<EditProfile />} />
          <Route path="editAllPostPage" element={<EditAllPostPage />} />
          <Route path="userEditForm" element={<UserEditForm />} />
        </Route>
          {/* 레시피 상세 페이지 라우트 추가 */}
          <Route path="/recipe/:No" element={<RecipeDetailPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;