import React from "react";
import Car from "./car.png";
import Donate from "./donate.png";
import Image from "./Image.png";
import "./crowdFunding.css";
export default function CrowdFunding() {
  return (
    <div className="cf_container">
      <div className="cf_car">
        <div className="cf_text">
          <div className="cf_text1">hello there</div>
          <div className="cf_text2">
            kjkjasdhldshkhg lkdshlkdlkfd hdkjdbhl;kdfj fsdjp;fjfjfdj
            sfdkhbsdfjhlk slkhsdflkjh
          </div>
        </div>
        <div className="cf_image">
          <img src={Car} alt="SAE cars" />
        </div>
      </div>
      <div className="cf_help">
        <div className="cf_helpText">
          help us achieve our goal
          <button className="cf_button">DONATE</button>
        </div>
        <div className="cf_helpImg">
          <img src={Donate} alt="Steps" />
        </div>
      </div>

      <div className="cf_about">
        <div className="cf_aboutHead">What is SAE?</div>
        <div className="cf_aboutContainer">
          <div className="cf_aboutText">
            aadssssssvvcskjhjklkhfjkshkjfhjfhjkfhjkfhkfjhfkjhfkjfhskj
          </div>
          <div className="cf_aboutImg">
            <img src={Image} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
