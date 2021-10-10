import { Typography,Card,CardContent } from "@mui/material"
import classes from './Message.module.css'
import { forwardRef } from "react"

const Message  = forwardRef(({message,user},ref)=>{
    const currUser = user===message.username
    return(
    
        <Card ref={ref} className={user!==message.username? classes.whole : classes.change}>
            <CardContent className={user!==message.username ? classes.whole_card : classes.change_card}>
                <Typography color="black" variant="h6" component="h6">
                    {!currUser &&`${message.username}: `}{message.text}

                </Typography>
            </CardContent>
        </Card>
    )
    
})

export default Message