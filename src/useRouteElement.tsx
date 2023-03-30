import {useRoutes} from 'react-router-dom'
import PATH from './constants/path'
import Homepage from './pages/Homepage'

const useRouteElement = () => {
  const routeElement = useRoutes([
    {
      path: '',
      element: <Homepage/>
    }
  ])
  return routeElement
}

export default useRouteElement