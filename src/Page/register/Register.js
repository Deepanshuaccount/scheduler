import React from "react";
import "../register/style.css";
import user1 from "../../img/user 1.png";
import password1 from '../../img/password 1.png';
import eye from '../../img/show 1.jpg';
import mainicon from '../../img/password 2.png';
import scheduler from '../../img/—Pngtree—creative s logo_4259366 2.png';
// import text from '../../img/SCHEDULER.png';
function Register() {
  return (
    <>
   
      <div className="main-container">
      <div className="scheduler-logo">
          <img src={scheduler} />
          <p>SCHEDULER</p>
          </div>
        <div className="form">
          <h1>Register With Us</h1>
          <img src={mainicon}/>
          <div className="text1">
            <label>USERNAME</label>
            <br />
          </div>
            <span className="user-icon">
             <img src={user1} />
            </span>
            <input type="email" name="email" />
            <br />
            <div className="text1">
              <label>PASSWORD</label>
              <br />
            </div>
            <span className="user-icon">
             <img src={password1}/>
            </span>
            <input type="password" name="password"></input>
            <span className="eye-icon">
            <img src={eye}/>
            </span>
            <br />{" "}
          <div className="text1">
            <label>CONFIRM PASSWORD</label>
            <br />
          </div>
          <input type="password" name="password"></input>
          <br />
          <button className="btn">Register</button>
        </div>
      </div>
    </>
  );
}

export default Register;
