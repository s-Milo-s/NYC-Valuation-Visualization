import {useState} from 'react'
import Drawer from '@mui/material/Drawer';
export default function Controls(open, setOpen){
    const handleClose = ()=>{
        setOpen(false)
    }
    return(
        <div>
            <Drawer
                anchor={"left"}
                open={open}
                onClose={handleClose}
            >
                here
            </Drawer>
        </div>
    )
}