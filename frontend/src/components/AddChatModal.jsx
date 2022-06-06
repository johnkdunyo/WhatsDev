import React from 'react'

const AddChatModal = () => {
  return (
    <React.Fragment>
        <div className="modal fade show" style={{display:'block'}} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                        <input type="email" className="form-control" id="recipient-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">Contact Name:</label>
                        <textarea className="form-control" id="message-text"></textarea>
                    </div>
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save Contact</button>
                </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default AddChatModal