import React from 'react'
import s from '../ProfileInfo.module.css'
import {useState, useEffect} from 'react'


const ProfileStatusHooks = (props) => {



        let [editMode,setEditMode] = useState(false);
        let [status, setStatus] = useState(props.status)


        useEffect(() => {
            setStatus(props.status)
        }, [props.status])

        const activateEditMode = () => {
            setEditMode(true)
        }

        const deactivateEditMode = () => {
            setEditMode(false)
            props.updateStatusThunk(status)
        }

        const onStatusChange = (e) => {
           setStatus(e.currentTarget.value)
          
        }



        return (
            <div className={s.status}>
                { !editMode &&
                    <div className = {s.status_text} onDoubleClick = {activateEditMode} >
                        {props.status}  
                    </div>
                }
                {editMode &&
                    <div className = {s.input_status}>
                        <input  type="text"  onBlur = {deactivateEditMode} onChange = {onStatusChange} autoFocus = {true}  value = {status} />
                    </div>
                }

            </div>
        )

    }

    export default ProfileStatusHooks