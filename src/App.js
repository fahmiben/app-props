
import './App.css';

import FullName from './Profile/Profile-Component/FullName';
//import Profession from './Profile/Profile-Component/Profession';
import Bio from './Profile/Profile-Component/Bio';

const App = () => {
  const handleAlert=(name) => {
    alert(`Hi, Im am a ${name}`)
  }
    
  return (
    <div className="App ">
      
      <FullName
        title='React Props Introduction'
        subTitle='Introduction to react props || Monday 19 Octobr 2020'
        studentsNumber={10}
        introductionAgenda={[
          "Introduction to React Props",
          "Types of props",
          "children props",
          "Destructuring"
        ]}
        handleAlert={handleAlert}
      />
        
    <Bio/>
    </div>
  )
}
export default App
