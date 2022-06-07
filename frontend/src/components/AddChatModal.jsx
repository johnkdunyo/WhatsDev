import React, {useState} from 'react';
import { database } from '../firebase';
import { setDoc , collection, doc} from 'firebase/firestore';

import { toast } from 'react-toastify';



const AddChatModal = ({modalStatus, setModalStatus}) => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();

   


    const user = localStorage.getItem('User');
    const userID = JSON.parse(user).uid;
    

    const onClickSaveContactHandler = (e) =>{
        e.preventDefault();
        setModalStatus(prev=>!prev)
        setDoc(doc(database, "users", userID, "contacts", email), {email, name})
        .then(response=>{
            console.log(response);
            toast(`${name} added successfuly!`);
            setTimeout(()=>{
                window.location.reload()
            }, 5000)

        })
        .catch(error=>{
            console.log(error)
        })





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