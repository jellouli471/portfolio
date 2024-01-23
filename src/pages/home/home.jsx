import Header from '../../component/header/header'
import Sec1 from '../../component/sec1/sec1';
import Sec2 from '../../component/sec-work/sec2';
import './home.css'
export default function Home (){
  return (
    <div className='app'>
      <Header/>
      <Sec1/>
      <Sec2 />
    </div>
  );
}


