import React from 'react'
import s from '../ProfileInfo.module.css'


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status : this.props.status
    }

   activateEditMode(){
       this.setState({
           editMode : true
       })
      
   }
   deActivateEditMode(){
       this.setState({
           editMode: false
       })
       this.props.updateStatusThunk(this.state.status)     
   }

   onStatusChange = (event) => {
       this.setState({
           status : event.currentTarget.value
       })
   }
   componentDidUpdate(prevProps,prevState){
       
    if(prevProps.status !== this.props.status){
        this.setState({
            status :this.props.status
        })
    }
      
       console.log("componentDidUpdate");
   }



    render() {
        console.log("render")
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                    <div className = {s.status_text} onDoubleClick = {this.activateEditMode.bind(this)}>
                        {this.props.status}
                    </div>
                }
                {
                    this.state.editMode &&
                    <div className = {s.input_status}>
                        <input  type="text" onChange = {this.onStatusChange} value = {this.state.status} autoFocus = {true} onBlur = {this.deActivateEditMode.bind(this)} />
                    </div>
                }

            </div>
        )}

    }

    export default ProfileStatus