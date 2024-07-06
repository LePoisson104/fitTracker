import { useState } from "react";

const UpdatePassword = () => {
  const [error, setError] = useState(null);

  return (
    <div className="update-password-modal-container">
      <form>
        <h2>Change your password</h2>
        <p className={`display-error ${error ? "active" : ""}`}>{error}</p>

        <div className="label-container">
          <label>Current Password</label>
        </div>
        <input type="password" placeholder="Enter Current Password..." />
        <br />
        <div className="label-container">
          <label>New Password</label>
        </div>
        <input type="password" placeholder="Enter New Password..." />
        <br />
        <div className="label-container">
          <label>Confirm Password</label>
        </div>
        <input type="password" placeholder="Enter Confirm Password..." />
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
  );
};

export default UpdatePassword;
