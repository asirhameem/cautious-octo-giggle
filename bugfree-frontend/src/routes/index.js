import {
  Routes, Route
} from 'react-router-dom'
import Home from '../pages'



const AppRoutes = (props) => {
  return (
    <Routes>
      
        <Route path="/" exact {...props} element={<Home/>}/>
       
    </Routes>
  )
}

export default AppRoutes