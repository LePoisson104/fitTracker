import UpdatePassword from "../components/modals/UpdatePassword";
import UpdateEmail from "../components/modals/UpdateEmail";
import UpdateName from "../components/modals/UpdateName";
import Success from "../components/modals/Success";

import { useState } from "react";

const Profile = () => {
  const [gender, setGender] = useState("male");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const openModal = (type) => {};

  return (
    <div className="user-profile">
      <div className="profile-detail-container">
        <h1>Account Settings</h1>
        <form className="account-info-container">
          <h3>Login</h3>
          <div className="account-info">
            <label>Name:</label>
            <div className="input-container">
              <input type="text" placeholder="Viet" disabled />
              <button
                className="update-btn"
                type="button"
                onClick={() => openModal("name")}
              >
                UPDATE
              </button>
            </div>
          </div>
          <div className="account-info">
            <label>Email:</label>
            <div className="input-container">
              <input
                type="email"
                placeholder="vietpham2017@gmail.com"
                disabled
              />
              <button
                className="update-btn"
                type="button"
                onClick={() => openModal("email")}
              >
                UPDATE
              </button>
            </div>
          </div>
          <div className="account-info">
            <label>Password:</label>
            <div className="input-container">
              <input type="password" placeholder="*******" disabled />
              <button
                className="update-btn"
                type="button"
                onClick={() => openModal("password")}
              >
                UPDATE
              </button>
            </div>
          </div>
        </form>
        <form className="profile-info-container">
          <h3>Profile</h3>
          <div className="personal-info">
            <div className="info-label">
              <label>Sex</label>
            </div>
            <div className="info-container">
              <div className="info-content">
                <label>
                  <input
                    type="radio"
                    value="male"
                    className="radio-style"
                    checked={gender === "male"}
                    onChange={handleGenderChange}
                  />
                  <span className="custom-radio"></span>
                  <span className="label">Male</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="female"
                    className="radio-style"
                    checked={gender === "female"}
                    onChange={handleGenderChange}
                  />
                  <span className="custom-radio"></span>
                  <span className="label">Female</span>
                </label>
              </div>
            </div>
          </div>
          <div className="personal-info">
            <div className="info-label">
              <label>Birthday</label>
            </div>
            <div className="info-container">
              <div className="info-content">
                <div className="info">
                  <label>Month</label>
                  <input type="text" placeholder="October" />
                </div>
                <div className="info">
                  <label>Day</label>
                  <input type="number" placeholder="4" />
                </div>
                <div className="info">
                  <label>Year</label>
                  <input type="number" placeholder="2002" />
                </div>
              </div>
            </div>
          </div>
          <div className="personal-info">
            <div className="info-label">
              <label>Height</label>
            </div>
            <div className="info-container">
              <div className="info-content">
                <div className="info">
                  <label>ft</label>
                  <input type="number" placeholder="5" />
                </div>
                <div className="info">
                  <label>in</label>
                  <input type="number" placeholder="10" />
                </div>
                <div className="info">
                  <div className="or-divider">or</div>
                </div>
                <div className="info">
                  <label>cm</label>
                  <input type="number" placeholder="177" />
                </div>
              </div>
            </div>
          </div>
          <div className="personal-info">
            <div className="info-label">
              <label>Current Weight</label>
            </div>
            <div className="info-container">
              <div className="info-content">
                <input type="number" placeholder="189" className="info-input" />
                <span>lbs</span>
                <div>or</div>
                <input type="number" placeholder="86" className="info-input" />
                <span>kg</span>
              </div>
            </div>
          </div>
          <div className="personal-info">
            <div className="info-label">
              <label>BMI</label>
            </div>
            <div className="info-container">
              <div className="info-content">
                <p>27.4</p>
              </div>
            </div>
          </div>
          <div className="save-changes-container">
            <button className="save-changes-btn" type="submit">
              Save Changes
            </button>
          </div>
        </form>
        <form className="calorie-settings">
          <h3>Goals</h3>
          <div className="personal-info">
            <div className="info-label">
              <label>Weight</label>
            </div>
            <div className="calories-container">
              <input type="number" placeholder="170" />
              <span>lbs</span>
            </div>
          </div>
          <div className="personal-info">
            <div className="info-label">
              <label>Calories</label>
            </div>
            <div className="calories-container">
              <input type="number" placeholder="2500" />
              <span>kcal</span>
            </div>
          </div>
          <div className="personal-info">
            <div className="info-label">
              <label>Protein</label>
            </div>
            <div className="calories-container">
              <input type="number" placeholder="50" />
              <span>%</span>
            </div>
          </div>
          <div className="personal-info">
            <div className="info-label">
              <label>Carbohydrates</label>
            </div>
            <div className="calories-container">
              <input type="number" placeholder="35" />
              <span>%</span>
            </div>
          </div>
          <div className="personal-info">
            <div className="info-label">
              <label>Fats</label>
            </div>
            <div className="calories-container">
              <input type="number" placeholder="15" />
              <span>%</span>
            </div>
          </div>
          <div className="save-changes-container">
            <button className="save-changes-btn" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
