import React from "react";
import styles from "../../All style module/AfterLoginMainPageNavbar.module.css";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logout } from '../../store/auth/auth.action';

// AiOutlineSetting;


const AfterLoginMainPageNavbar = () => {
  const dispatch = useDispatch()
  let Auth= localStorage.getItem("loginAuth")||localStorage.getItem("signupAuth")||""
  return (
    <div className={styles.navbar}>
      <div className={`${styles.navbar_left}`}>
        <div style={{ position: "relative" }}>
          <Link to="/home">
            <img
              style={{ marginTop: "50%", width: "63px", height: "55px" }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAYAAAC8TkynAAADwklEQVR42u2bS28TZxSGx7E96jYSYtWum4IEfwBlA4sSVkjsCn8CVSI3kqK2KKWXtOEiUYGQAoRFITTloqqoarlI0KwwSqANUgOtKkSDDY49Y2fs+V7O+SwgagkwZ8a3T3OkRxnN5XzveWyPsxhbVlxxBS4MWzb2W104YG0ktuKgta0p8Nqc4ZD1Lmeq/+CHrE5acJQoEGgxCjobZazP8AesbuJBJGGProaaWAt1ekMN2uZ9EYngjN1RD99DeNJQ6sgqOBd24O9rh3HrxiXMz88jl8uhWCzCdV39N5vN4v6daX0On8vXhJDAWXuiGX7MWkPNHNHgx97Gw1/24vfbMyiXy+B69HgRRbe2Xb2V0XDxPj7GpZRCySlg4cqI7iGU4HD2cMPDStDN7rokgHN+O+Zmb8L3fVSJStXXw40cnsTR737W2+7ufg0X7+NjXHwuX6MllRfhXtwhk8DZaYYwr/4WaoKgPP5pJ/L5PJ7VianLGBu/oLfv/fMvxs/++j8BvI+PcfG5J3+4guW1dG0Qkiw8g1zAfmsy6IJLZzahUKi9lS9Pz2Ihl4dXqSJz5x7+W8sFLC8+l6/ha7lHrRT8qfclEs6EEZAPuuDD2UvPB5mZu4/pzF2sVCsJeFa/3ZzDzN2/Xux4lJEIyIf5/Adb7Ng78DwPb1qvE/DSojUC55LcB+g/q46gC6mJdfqmV1cBp9YHF0CzNEQAvu2E8qv1E6B8vUbrCuB3wZ/n6idg/rzsm0AqQI0lEJjxLsArRi+Aeqrj70GSqbECmO/p66riRCeAeqmpzZDmabwA5iTdrBYyrxawZ0jzyqIeamI9wmRpjgBNB9SPH6woQuWymhUHp2t1j5A5mihgGce7oK5+CPxxCsjeppd/AfArNXib99ExPkefG+HarSGgicQCxAK+oQYGEAuIBcQChAK+pgYGIBbgjyZgArEAsYCvOmACYgFVutgE5AK+pAYGIBfwBTUwgFiAVEDl8w6YgFzAPmpgACEEJGECYgHeZ0mYgFzACDUwgFiAVMDS3iRMQC7g0xRMQCyg/EkKJiATACtR/pgaGID4OaHSnlSeQJsje0KEqzycmix9lEY7wzPIBQwlt5SGqVEbwzPIH5KyrIQ7lL7u7k6jLaHsPEOohyWX+uw17mDaIdBmOJw9ksdlncFkjzOQ9gi0CR5njvSB6dJAqtsZsB84/TZaGsrIWevyyPyTXquzuCs96vTahWKvjVZCZ6JsnLEhvxhZ7LO7iv1vbXR77a2FPntbM+C1OQNnacgvRuIysJ4CdtAjHhlPxXYAAAAASUVORK5CYII="
              alt="logo"
            />
          </Link>
        </div>
        <Link to="/home">Home</Link>
        <Link to="">Goals</Link>
        <Link to="/community">Community</Link>
        <Link to="">Insights</Link>
        <Link to="">Forums</Link>
        <Link to="">Apps s Devices</Link>
        <Link to="">Messages</Link>
        <Link to="">
          <IoMdSettings />
        </Link>
      </div>

      <div className={`${styles.navbar_left} ${styles.navbar_right_links}`}>
        <Link to=""><button>{Auth}</button></Link>
        <span>|</span>

        <Link to="">Upgrade</Link>
        <span>|</span>
        {/* <Link to="">Sign out</Link> */}
        <button onClick={()=> dispatch(logout())}>Sign out</button>
        <img
          src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default AfterLoginMainPageNavbar;
