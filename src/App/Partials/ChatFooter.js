import React, {useState} from 'react'
import {Button, Input} from 'reactstrap'
import * as FeatherIcon from 'react-feather'
import Emoji from "./Emoji"

function ChatFooter(props) {
    const [emoji, setEmoji] = useState(false)
    return (
        <div className="chat-footer">
            <form onSubmit={(e) =>{
                e.preventDefault()
                props.handleSubmit()
            }}>
                <div>
                    <Button color="light" className="mr-3" title="Emoji" onClick={() => setEmoji(!emoji)}>
                        <FeatherIcon.Smile/>
                    </Button>
                    <Emoji show={emoji} click={props.click}/>
                </div>
                <Input type="text" className="form-control" placeholder="Write a message." value={props.inputMsg}
                       onChange={(e) => props.handleChange(e.target.value)}/>
                <div className="form-buttons">
                    {/* <Button color="light">
                        <FeatherIcon.Paperclip/>
                    </Button> */}
                    <Button color="primary" disabled={props.inputMsg === "" ? true : false} onClick={props.handleSubmit}>
                        <FeatherIcon.Send/>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ChatFooter
