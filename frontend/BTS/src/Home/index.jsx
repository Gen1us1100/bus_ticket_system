import './index.scss'
import vid from "../Assets/aaa.gif"

export default function Home() {
  return (
    <div className='container'>
    <div className='box'>
        <div className='welcome'>welcum!!!!!</div>
    <div className='gif'><img src={vid} alt="loading..." /></div>


    </div>
    </div>
  )
}
