import React from 'react';

export default (props) => {
  return (
    <div className="confirm-delete">
      <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
        Delete
      </button>

      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Delete Confirmation</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this item?
              <br />
              This action is irreversible.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger">Confirm Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
