import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <a href="" data-toggle="modal" data-target="#exampleModalLong">
        Privacy Policy
      </a>

      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Privacy Policy
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="text-muted text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                voluptatibus quibusdam explicabo facilis maiores accusantium
                natus, odio ipsa doloremque, nam in aut quidem, non unde
                quisquam alias incidunt ad. Quisquam!
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
