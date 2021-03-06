import React, {useState} from 'react';
import { database } from '../firebase';
import { setDoc , collection, doc, getDocs, getDoc, query, where, updateDoc} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid'

import { toast } from 'react-toastify';



const AddChatModal = ({modalStatus, setModalStatus}) => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();

   


    const userObj = localStorage.getItem('User');
    const user = JSON.parse(userObj);
    const userID = user.uid;
    
    

    const onClickSaveContactHandler = (e) =>{
        e.preventDefault();
        setModalStatus(prev=>!prev)
        const newUser = {
            email, name
        }
        // first lets check if there is an account for the email entered
        getDocs(query(collection(database, "users"), where("email", '==', email)))
        .then(result=>{
            console.log(result)
            if(!result.empty){
                console.log(result[0])
                result.forEach(contact=>{
                    const chatID = uuidv4()
                    newUser.avatarURL = contact.data().avatarURL
                    newUser.uid = contact.id
                    setDoc(doc(database, "users", userID, "contacts", email), { email, uid: contact.id, chatID})
                        .then(response=>{
                            // console.log(response);
                            
                            // setTimeout(()=>{
                            //     window.location.reload()
                            // }, 5000)

                            // get added user and add his the current user to his contacts
                            console.log(
                                'name: ', user.fullName,
                                'email: ', user.email,
                                'avatarURL:', user.avatarURL,
                                'uid :', user.uid,
                                'chatID: ', chatID
                            )
                            setDoc(doc(database, 'users', contact.id, 'contacts', user.email ),
                            {
                                email: user.email,
                                uid: user.uid,
                                chatID
                            } ).then(result=>{
                                console.log(result)
                                toast(`${name} added successfuly!`);
                            }).catch(error=>{
                                console.log(error)
                            })


                            



                        })
                        .catch(error=>{
                            console.log(error)
                        })
                })
  
                
            }else{
                setDoc(doc(database, "users", userID, "contacts", email), {name, email})
                    .then(response=>{
                        // console.log(response);
                        toast(`${name} added successfuly!`);
                        // setTimeout(()=>{
                        //     window.location.reload()
                        // }, 5000)

                    })
                    .catch(error=>{
                        console.log(error)
                    })

            }
            
        })
        .catch(error=>{
            console.log(error)
        })
        console.log('new user here: ', newUser)
        





    }
  return (
    <React.Fragment>
        <div className="modal fade  show" style={{display: ` ${modalStatus ? 'block' : 'none'}` }} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Add Contact</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Email:</label>
                        <input type="email" className="form-control" id="recipient-name" onChange={e=>setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">Contact Name:</label>
                        <textarea className="form-control" id="message-text" onChange={e=>setName(e.target.value)}></textarea>
                    </div>
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>setModalStatus(prev=>!prev)}>Close</button>
                    <button type="submit" className="btn btn-primary" onClick={onClickSaveContactHandler}>Save Contact</button>
                </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default AddChatModal