import './Profile.scss'

export default function Profile() {

    const username = localStorage.getItem('username') || 'user';

  return (
    <div className="big">
        <div className="profile-pic">
            <div className="circle">
                <div className="middle">
                    <div className="inner">

                    </div>
                </div>
            </div>
            <div className="account">
                ACCOUNT
            </div>
        </div>
        <div className="display">
            <h1 className='topic'>Name</h1>
            <p className='para'>{username}</p>
        </div>
    </div>
  )
}
