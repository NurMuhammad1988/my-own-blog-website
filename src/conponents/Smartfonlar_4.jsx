import React from 'react'
import { NavLink } from 'react-router-dom'
const Smartfonlar_4 = () => {
  return (
    <div className='mt-24'>Smartfonlar_4
    
    
    
    <div className="flex justify-center gap-7">
                <NavLink to="/smartfonlar">
                    <h1 className="cursor-pointer hover:bg-slate-300 p-2 border-[1px] border-slate-400 ">
                        1
                    </h1>
                </NavLink>

                <NavLink to="/smartfonlar_2">
                    <h1 className="cursor-pointer hover:bg-slate-300 p-2 border-[1px] border-slate-400 ">
                        2
                    </h1>
                </NavLink>

                <NavLink to="/smartfonlar_3">
                    <h1 className="cursor-pointer hover:bg-slate-300 p-2 border-[1px] border-slate-400 ">
                        3
                    </h1>
                </NavLink>
               <NavLink to="/Smartfonlar_4"> <h1 className="cursor-pointer hover:bg-slate-300 p-2 border-[1px] border-slate-400 ">
                    4..
                </h1></NavLink>
               <NavLink to="/smartfonlar_5"> <h1 className="cursor-pointer hover:bg-slate-300 p-2 border-[1px] border-slate-400 ">
                    5
                </h1></NavLink>
            </div>
    
    </div>
  )
}

export default Smartfonlar_4