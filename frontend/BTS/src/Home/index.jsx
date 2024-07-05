import './index.scss'
import vid from "../Assets/xyz.gif"
import 'boxicons'
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  return (
    <div className='container'>
    <div className='box'>
        <div className='welcome'>welcum!!!!!</div>
        <div className='gif'><img src={vid} alt="loading..." /></div>

        <div className='login'>
          <form>
            <div className='input'>
              <input type='text' placeholder='Email' required /><box-icon name='user-circle' type='solid' color='#71c563' ></box-icon>
            </div>
            <div className='input'>
              <input type='text' placeholder='Password' required /><box-icon type='solid' name='lock-alt' color='#71c563'></box-icon>
            </div>
            <div className='input'>
              <button type='submit' className='btn'>LOGIN</button>
            </div>


            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={{flex: 1, height: '1px', backgroundColor: 'GREY'}} />

            <div style={{padding: '0 2px'}}>
            <p style={{width: '70px', textAlign: 'center',fontWeight: 'bold'}}>OR</p>
            </div>
            <div style={{flex: 1, height: '1px', backgroundColor: 'GREY'}} /></div>

            <div className='google'>
            <button className='g-btn' onClick={() => { console.log('Google sign-in button clicked') }}>
            <FcGoogle size={25} />
            </button>
            </div>

            <div className='sign-up'>
                <p>ACCOUNT NAHI KA BHADVYA?<a href='#'>Join now</a></p>
                
            </div>

          </form>

          

        </div>

    </div>
    </div>
  )
}
