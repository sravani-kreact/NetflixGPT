import Browse from "./Browse"
import Login from "./Login"
import {createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from "react-router-dom"

interface BodyProps{
   // message:string;
}

const Body:React.FC<BodyProps>=()=>{
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {

        },

    ])
    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body