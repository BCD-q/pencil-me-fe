import pencilMe from '../../resource/images/common/pencilMeThumbNail.png'
import {Link} from 'react-router-dom'

export default function Intro(): JSX.Element {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col my-auto">
        <img src={pencilMe} alt="" className="w-4/5 mx-auto" />
        <Link
          to="login"
          className="btn bg-[#78be5e] mt-20 mb-6 text-white w-11/12 mx-auto">
          <button>로그인</button>
        </Link>
        <Link to="register" className="w-11/12 mx-auto btn">
          <button className="w-11/12 mx-auto btn">회원 가입</button>
        </Link>
      </div>
    </div>
  )
}
