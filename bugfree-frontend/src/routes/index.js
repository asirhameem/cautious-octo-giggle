import {
  Routes, Route
} from 'react-router-dom'



const AppRoutes = (props) => {
  return (
    <Routes>
      
        <Route path="/" exact {...props} element={<Dashboard/>}/>
       
    </Routes>
  )
}

export default AppRoutes