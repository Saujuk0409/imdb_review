import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import image1 from "../assests/imdbsigninlogo.png";
import image2 from "../assests/amazonlogo.png";
import image3 from "../assests/googlelogo.png";
import image4 from "../assests/applelogo.png";
import image5 from "../assests/fblogo.png";
import "../styles/styles.css";
import Signbtns from "./Signbtns";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { display } from "@mui/system";
import { Button } from "semantic-ui-react";
function Signin() {
  const [Showmore, setShowmore] = useState(false);
  localStorage.getItem("")

  function changeState() {
    if(Showmore===true)
        setShowmore(false);
    // else 
    //     setShowmore(true)
  }
  return (
    <div style={{ color: "grey" }}>
      <Navbar />
      <div className="SigninContainer">
        <div className="SigninCard" style={{ display: "flex" }}>
          <div className="Sicolumn1">
            <div className="sih3">Sign in</div>
            <Link to="/signinImdb">
            <Signbtns
              img={image1}
              name={"Sign in with IMDb"}
              // style={{
              //   background:
              //     "url(https://m.media-amazon.com/images/S/sash/1dgQkZ$7ol49TQ9.png) no-repeat",
              //   backgroundSize: "42px, 99px",
              //   backgroundPosition: "0px 5px",
              // }}
              onClick={()=>{<Link to="/signinImdb"/>}}
            /></Link>
            <Signbtns img={image2} name={"Sign in with Amazon"} />
            <Signbtns img={image3} name={"Sign in with Google"} />
            <Signbtns img={image4} name={"Sign in with Apple"} />
            <div classname="Sicolumn1" onClick={changeState}>
              {Showmore ? (
                <p className="showmore">
                  Show more options
                  <ExpandMoreIcon />
                </p>
              ) : (
                <Link to="">
                <Signbtns img={image5} name={"Sign in with Facebook"} /></Link>
              )}
              <div className="or-container">
                <hr style={{ width: "35%", marginLeft: "1%" }} />
                <p style={{ marginLeft: "-10%", marginTop: "-12%" }}>or</p>
                <hr
                  style={{ width: "50%", marginLeft: "54%", marginTop: "-11%" }}
                />
              </div>
                <Link to="/signup">
              <Button
                // img={""}
                name={"Create a New Account"}
                style={{
                  padding: "6%",
                  justifyContent: "center",
                  backgroundColor: "#E4B721",
                  marginTop: "5%",
                  width: "115%",
                  marginLeft: "-1%",
                  color:"black",
                  border:"none"
                }}
              >Create your IMDb account</Button>
              </Link>
            </div>
            <div className="termscond">
              {/* <p> By signing in, you agree to IMDb's <a href="">Conditions of</a><br/> <a>Use</a> and <a href="">Privacy Policy</a>.</p> */}
              <p> By signing in, you agree to IMDb's <a href="">Conditions of</a></p>
              <p>
                <a href="">Use</a> and <a href="">Privacy Policy</a>.</p>
            </div>
          </div>
          <div className="vl1"></div>
          <div className="description">
            <p className="desheading" style={{ marginTop:"22%",marginLeft:"-35%"}}>Benefits of your free IMDb account</p>
            <div className="desrow1" >
              <p className="dessubhead" >Personalized Recommendations</p>
              <p className="despara" >Discover shows you'll love.</p>
            </div>  
            <div className="desrow1" style={{marginTop:"5%"}}>
              <p className="dessubhead" >Your Watchlist</p>
              <p className="despara" >Track everything you want to watch and receive e-mail when movies</p> <p className="despara" >open in theaters.</p>
            </div>  
            <div className="desrow1" style={{marginTop:"5%"}}>
              <p className="dessubhead"  >Your Ratings</p>
              <p className="despara" >Rate and remember everything you've seen.</p>
            </div>  
            <div className="desrow1">
              <p className="dessubhead">Contribute to IMDb</p>
              <p className="despara"  >Add data that will be seen by millions of people and get cool badges.</p>
            </div>  
          </div>
        </div>
        <div className="SigninCard2">
           <div className="siheader">
                <div className="rhs">
                    <a className="clearhis" href="#">Clear your history</a>
                </div>
                <h3>Recently Viewed</h3>
           </div>
        </div>
      <footer>
            <button className="signinforaccess">
                Sign in for more access
            </button>
            <div className="social-media">
                  <span>
                  <a href="https://www.tiktok.com/@imdb">
                  <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--tiktok" id="iconContext-tiktok" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M15.2346 3C15.5316 5.55428 16.9572 7.07713 19.4359 7.23914V10.112C17.9995 10.2524 16.7412 9.78262 15.2778 8.89699V14.2702C15.2778 21.096 7.83633 23.2291 4.84463 18.3365C2.92217 15.1882 4.09941 9.66382 10.2664 9.44241V12.4719C9.7966 12.5475 9.29438 12.6663 8.83536 12.8229C7.46372 13.2873 6.68609 14.1568 6.9021 15.6904C7.31791 18.6281 12.7073 19.4975 12.2591 13.7571V3.0054H15.2346V3Z"></path></svg>
                  <path d="M15.2346 3C15.5316 5.55428 16.9572 7.07713 19.4359 7.23914V10.112C17.9995 10.2524 16.7412 9.78262 15.2778 8.89699V14.2702C15.2778 21.096 7.83633 23.2291 4.84463 18.3365C2.92217 15.1882 4.09941 9.66382 10.2664 9.44241V12.4719C9.7966 12.5475 9.29438 12.6663 8.83536 12.8229C7.46372 13.2873 6.68609 14.1568 6.9021 15.6904C7.31791 18.6281 12.7073 19.4975 12.2591 13.7571V3.0054H15.2346V3Z"></path>
                  </a>
                  </span>
                  <span>
                    <a>
                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--instagram" id="iconContext-instagram" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M11.997 2.04c-2.715 0-3.056.011-4.122.06-1.064.048-1.79.217-2.426.463a4.901 4.901 0 0 0-1.771 1.151 4.89 4.89 0 0 0-1.153 1.767c-.247.635-.416 1.36-.465 2.422C2.011 8.967 2 9.307 2 12.017s.011 3.049.06 4.113c.049 1.062.218 1.787.465 2.422a4.89 4.89 0 0 0 1.153 1.767 4.901 4.901 0 0 0 1.77 1.15c.636.248 1.363.416 2.427.465 1.066.048 1.407.06 4.122.06s3.055-.012 4.122-.06c1.064-.049 1.79-.217 2.426-.464a4.901 4.901 0 0 0 1.77-1.15 4.89 4.89 0 0 0 1.154-1.768c.247-.635.416-1.36.465-2.422.048-1.064.06-1.404.06-4.113 0-2.71-.012-3.05-.06-4.114-.049-1.062-.218-1.787-.465-2.422a4.89 4.89 0 0 0-1.153-1.767 4.901 4.901 0 0 0-1.77-1.15c-.637-.247-1.363-.416-2.427-.464-1.067-.049-1.407-.06-4.122-.06m0 1.797c2.67 0 2.985.01 4.04.058.974.045 1.503.207 1.856.344.466.181.8.397 1.15.746.349.35.566.682.747 1.147.137.352.3.88.344 1.853.048 1.052.058 1.368.058 4.032 0 2.664-.01 2.98-.058 4.031-.044.973-.207 1.501-.344 1.853a3.09 3.09 0 0 1-.748 1.147c-.35.35-.683.565-1.15.746-.352.137-.88.3-1.856.344-1.054.048-1.37.058-4.04.058-2.669 0-2.985-.01-4.039-.058-.974-.044-1.504-.207-1.856-.344a3.098 3.098 0 0 1-1.15-.746 3.09 3.09 0 0 1-.747-1.147c-.137-.352-.3-.88-.344-1.853-.049-1.052-.059-1.367-.059-4.031 0-2.664.01-2.98.059-4.032.044-.973.207-1.501.344-1.853a3.09 3.09 0 0 1 .748-1.147c.35-.349.682-.565 1.149-.746.352-.137.882-.3 1.856-.344 1.054-.048 1.37-.058 4.04-.058"></path>
                    <path d="M11.997 2.04c-2.715 0-3.056.011-4.122.06-1.064.048-1.79.217-2.426.463a4.901 4.901 0 0 0-1.771 1.151 4.89 4.89 0 0 0-1.153 1.767c-.247.635-.416 1.36-.465 2.422C2.011 8.967 2 9.307 2 12.017s.011 3.049.06 4.113c.049 1.062.218 1.787.465 2.422a4.89 4.89 0 0 0 1.153 1.767 4.901 4.901 0 0 0 1.77 1.15c.636.248 1.363.416 2.427.465 1.066.048 1.407.06 4.122.06s3.055-.012 4.122-.06c1.064-.049 1.79-.217 2.426-.464a4.901 4.901 0 0 0 1.77-1.15 4.89 4.89 0 0 0 1.154-1.768c.247-.635.416-1.36.465-2.422.048-1.064.06-1.404.06-4.113 0-2.71-.012-3.05-.06-4.114-.049-1.062-.218-1.787-.465-2.422a4.89 4.89 0 0 0-1.153-1.767 4.901 4.901 0 0 0-1.77-1.15c-.637-.247-1.363-.416-2.427-.464-1.067-.049-1.407-.06-4.122-.06m0 1.797c2.67 0 2.985.01 4.04.058.974.045 1.503.207 1.856.344.466.181.8.397 1.15.746.349.35.566.682.747 1.147.137.352.3.88.344 1.853.048 1.052.058 1.368.058 4.032 0 2.664-.01 2.98-.058 4.031-.044.973-.207 1.501-.344 1.853a3.09 3.09 0 0 1-.748 1.147c-.35.35-.683.565-1.15.746-.352.137-.88.3-1.856.344-1.054.048-1.37.058-4.04.058-2.669 0-2.985-.01-4.039-.058-.974-.044-1.504-.207-1.856-.344a3.098 3.098 0 0 1-1.15-.746 3.09 3.09 0 0 1-.747-1.147c-.137-.352-.3-.88-.344-1.853-.049-1.052-.059-1.367-.059-4.031 0-2.664.01-2.98.059-4.032.044-.973.207-1.501.344-1.853a3.09 3.09 0 0 1 .748-1.147c.35-.349.682-.565 1.149-.746.352-.137.882-.3 1.856-.344 1.054-.048 1.37-.058 4.04-.058"></path><path d="M11.997 15.342a3.329 3.329 0 0 1-3.332-3.325 3.329 3.329 0 0 1 3.332-3.326 3.329 3.329 0 0 1 3.332 3.326 3.329 3.329 0 0 1-3.332 3.325m0-8.449a5.128 5.128 0 0 0-5.134 5.124 5.128 5.128 0 0 0 5.134 5.123 5.128 5.128 0 0 0 5.133-5.123 5.128 5.128 0 0 0-5.133-5.124m6.536-.203c0 .662-.537 1.198-1.2 1.198a1.198 1.198 0 1 1 1.2-1.197"></path></svg>
                    </a>
                  </span>
                  <span>
                  <a class="ipc-icon-link ipc-icon-link--baseAlt ipc-icon-link--onBase" title="Twitter" role="button" tabindex="0" aria-label="Twitter" aria-disabled="false" target="_blank" rel="nofollow noopener" href="https://twitter.com/imdb"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--twitter" id="iconContext-twitter" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M8.29 19.936c7.547 0 11.675-6.13 11.675-11.446 0-.175-.004-.348-.012-.52A8.259 8.259 0 0 0 22 5.886a8.319 8.319 0 0 1-2.356.633 4.052 4.052 0 0 0 1.804-2.225c-.793.46-1.67.796-2.606.976A4.138 4.138 0 0 0 15.847 4c-2.266 0-4.104 1.802-4.104 4.023 0 .315.036.622.107.917a11.728 11.728 0 0 1-8.458-4.203 3.949 3.949 0 0 0-.556 2.022 4 4 0 0 0 1.826 3.348 4.136 4.136 0 0 1-1.858-.503l-.001.051c0 1.949 1.415 3.575 3.292 3.944a4.193 4.193 0 0 1-1.853.07c.522 1.597 2.037 2.76 3.833 2.793a8.34 8.34 0 0 1-5.096 1.722A8.51 8.51 0 0 1 2 18.13a11.785 11.785 0 0 0 6.29 1.807"></path></svg></a>
                  <path d="M8.29 19.936c7.547 0 11.675-6.13 11.675-11.446 0-.175-.004-.348-.012-.52A8.259 8.259 0 0 0 22 5.886a8.319 8.319 0 0 1-2.356.633 4.052 4.052 0 0 0 1.804-2.225c-.793.46-1.67.796-2.606.976A4.138 4.138 0 0 0 15.847 4c-2.266 0-4.104 1.802-4.104 4.023 0 .315.036.622.107.917a11.728 11.728 0 0 1-8.458-4.203 3.949 3.949 0 0 0-.556 2.022 4 4 0 0 0 1.826 3.348 4.136 4.136 0 0 1-1.858-.503l-.001.051c0 1.949 1.415 3.575 3.292 3.944a4.193 4.193 0 0 1-1.853.07c.522 1.597 2.037 2.76 3.833 2.793a8.34 8.34 0 0 1-5.096 1.722A8.51 8.51 0 0 1 2 18.13a11.785 11.785 0 0 0 6.29 1.807"></path>
                  </span>
                  <span>
                  <a class="ipc-icon-link ipc-icon-link--baseAlt ipc-icon-link--onBase" title="YouTube" role="button" tabindex="0" aria-label="YouTube" aria-disabled="false" target="_blank" rel="nofollow noopener" href="https://youtube.com/imdb/">
                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--youtube" id="iconContext-youtube" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M9.955 14.955v-5.91L15.182 12l-5.227 2.955zm11.627-7.769a2.505 2.505 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 8.746 2 12 2 12s0 3.254.418 4.814c.23.86.908 1.538 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.505 2.505 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814z"></path></svg></a>
                     <path d="M9.955 14.955v-5.91L15.182 12l-5.227 2.955zm11.627-7.769a2.505 2.505 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 8.746 2 12 2 12s0 3.254.418 4.814c.23.86.908 1.538 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.505 2.505 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814z"></path>
                  </span>
                  <span>
                  <a class="ipc-icon-link ipc-icon-link--baseAlt ipc-icon-link--onBase" title="Facebook" role="button" tabindex="0" aria-label="Facebook" aria-disabled="false" target="_blank" rel="nofollow noopener" href="https://facebook.com/imdb">
                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--facebook" id="iconContext-facebook" viewBox="0 0 24 24" fill="white" role="presentation">
                      <path d="M20.896 2H3.104C2.494 2 2 2.494 2 3.104v17.792C2 21.506 2.494 22 3.104 22h9.579v-7.745h-2.607v-3.018h2.607V9.01c0-2.584 1.577-3.99 3.882-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.595-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V22h5.097c.61 0 1.104-.494 1.104-1.104V3.104C22 2.494 21.506 2 20.896 2"></path></svg></a>
                  {/* <path d="M20.896 2H3.104C2.494 2 2 2.494 2 3.104v17.792C2 21.506 2.494 22 3.104 22h9.579v-7.745h-2.607v-3.018h2.607V9.01c0-2.584 1.577-3.99 3.882-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.595-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V22h5.097c.61 0 1.104-.494 1.104-1.104V3.104C22 2.494 21.506 2 20.896 2"></path> */}
                  </span>
            </div>
            <div className="imdblinks">
                <div >
                <a class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color" role="button" tabindex="0" aria-disabled="false" target="_blank" href="https://slyb.app.link/SKdyQ6A449">Get the IMDb App
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="white" role="presentation" style={{paddingLeft:"5%"}}>
                  <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path>
                </svg>
                  </a>
                </div>
                <div>
                <a class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color" role="button" tabindex="0" aria-disabled="false" target="_blank" href="https://help.imdb.com/imdb">Help
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation" style={{paddingLeft:"10%"}}>
                  <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></a>
                </div>
                <div>
                <a class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color" role="button" tabindex="0" aria-disabled="false" target="_blank" href="https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so">Site Index
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation" style={{paddingLeft:"6%"}}>
                  <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></a>
                </div>
                <div>
                <a class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color" role="button" tabindex="0" aria-disabled="false" target="_blank" href="https://pro.imdb.com?ref_=cons_tf_pro&amp;rf=cons_tf_pro">IMDbPro
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation" style={{paddingLeft:"6%"}}>
                  <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></a>
                </div>
                <div>
                <a class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color" role="button" tabindex="0" aria-disabled="false" target="_blank" href="https://www.boxofficemojo.com">Box Office Mojo
                <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation" style={{paddingLeft:"5%"}}>
                  <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></a>
                </div>
            </div>
            <div className="imdblinks">
            <div>
            <a class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color" role="button" tabindex="0" aria-disabled="false" target="_blank" href="https://developer.imdb.com/">IMDb Developer
            <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation" style={{paddingLeft:"5%"}}>
              <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path>
            </svg>
            </a>
            </div>
            </div>
            <div className="imdblinks">
            <div>
            <a class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color" role="button" tabindex="0" aria-disabled="false" href="https://www.imdb.com/pressroom/?ref_=ft_pr">Press Room</a>
            </div>
            <div>
            <a class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color" role="button" tabindex="0" aria-disabled="false" target="_blank" href="https://advertising.amazon.com/resources/ad-specs/imdb/">Advertising
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation" style={{paddingLeft:"5%"}}>
              <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path>
              </svg>
              </a>
            </div>
            <div>
            <a class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color" role="button" tabindex="0" aria-disabled="false" target="_blank" href="https://www.amazon.jobs/en/teams/imdb">Jobs
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation" style={{paddingLeft:"9%"}}>
              <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path>
              </svg>
              </a>
            </div>
            <div>
            <a class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color" role="button" tabindex="0" aria-disabled="false" href="/conditions?ref_=ft_cou">Conditions of Use</a>
            </div>
            <div>
            <a class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color" role="button" tabindex="0" aria-disabled="false" href="/privacy?ref_=ft_pvc">Privacy Policy</a>
            </div>
            </div>
      </footer>
      </div>
    </div>
  );
}

export default Signin;
