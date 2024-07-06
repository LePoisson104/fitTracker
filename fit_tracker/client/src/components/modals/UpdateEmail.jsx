import { useState } from "react";

const UpdateEmail = ({ status }) => {
  const [error, setError] = useState(null);

  return (
    <div
      className={`success-modal-overlay ${status === "active" ? "active" : ""}`}
    >
      <div className="update-password-modal-container">
        <form>
          <h2>Change your Email</h2>
          <p className={`display-error ${error ? "active" : ""}`}>{error}</p>

          <div className="label-container">
            <label>New Email</label>
          </div>
          <input type="email" placeholder="Enter New Email..." />
          <br />
          <div className="label-container">
            <label>Confirm Email</label>
          </div>
          <input type="email" placeholder="Enter Confirm Email..." />
          <br />

          <div className="save-password-changes-container">
            <button type="button" className="cancel-changes-btn">
              Cancel
            </button>
            <button type="submit" className="save-changes-btn">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmail;
