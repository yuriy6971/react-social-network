import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks.jsx'
import userSplash from '../../../assets/images/images.jpg'
import ProfileDataReduxForm from './ProfileDataForm.jsx'



const ProfileInfo = (props) => {
   
    let [editMode, setEditMode] = useState(false);
    

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length > 0) {
            props.savePhotoThunk(e.target.files[0])  
        }
    }
    const onSubmit = (formData) => {
        props.saveProfileThunk(formData)
        setEditMode(false)
    }
    const goToEditMode = () => {
        setEditMode(true)
    }
    const backProfile = () => {
        setEditMode(false)
    }
  

    return (

        <div className={s.post}>
            <img className={s.pics} src="https://cdn.pixabay.com/photo/2021/01/07/18/19/boat-5898153__340.jpg" />
            <div className={s.info}>
                <div className={s.visual}>
                    <img className={s.pics1} src={props.profile.photos.large != null ? props.profile.photos.large : userSplash} />
                    {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                    <ProfileStatusHooks status={props.status} updateStatusThunk={props.updateStatusThunk} />
                </div>
          
                {editMode ? <ProfileDataReduxForm initialValues = {props.profile}  profile = {props.profile} onSubmit = {onSubmit} backProfile = {backProfile}/>
                 : <ProfileUserData goToEditMode = {goToEditMode}   profile = {props.profile} isOwner = {props.isOwner} />}
             

            </div>
        </div>
    )
}

const ProfileUserData = (props) => {

    return (
        <div className = {s.user_data}>
            <div className={s.user_info}>
                {props.isOwner && <button className = {s.butt_edit} onClick = {props.goToEditMode} >edit</button> }
                <h3 className={s.user_name}>{props.profile.fullName}</h3>
                
                <div className={s.job}>
                    <p>
                        looking for a job : {props.profile.lookingForAJob ? "yes" : "no"}
                    </p>
                    {
                        props.profile.lookingForAJob &&
                        <p>
                            My professionall skills : {props.profile.lookingForAJobDescription}
                        </p>
                    }
                </div>
                <p className={s.user_text}> UserId : {props.profile.userId}</p>
                <p className={s.about}>About me : {props.profile.aboutMe}</p>
                

            </div> 
            <div className={s.contacts}>
                    <span>Contacts</span> : {Object.keys(props.profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                    })}
                </div>
        </div>

    )
}

const Contact = (props) => {
    return (
        <div className={s.cont_info}>
            {props.contactTitle} : {props.contactValue}
        </div>
    )
}


export default ProfileInfo;