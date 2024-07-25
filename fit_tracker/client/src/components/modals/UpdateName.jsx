import { useState } from "react";

const UpdateName = ({ status }) => {
  const [error, setError] = useState(null);

  return (
    <div
      className={`success-modal-overlay ${status === "active" ? "active" : ""}`}
    >
      <div className="update-password-modal-container">
        <form>
          <h2>Change your Name</h2>
          <div className="label-container">
            <label>New Name</label>
          </div>
          <input type="text" placeholder="Enter New Name..." />
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

export default UpdateName;
