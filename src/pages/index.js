
    import React, { useEffect } from "react"
    import { Link } from "gatsby"
    import { after, before } from "../util/statikkCompatLayer.js"
    import pic02 from "../assets/images/pic02.jpg"
import pic03 from "../assets/images/pic03.jpg"
import pic01 from "../assets/images/pic01.jpg"
import pic04 from "../assets/images/pic04.jpg"
import pic05 from "../assets/images/pic05.jpg"
import pic06 from "../assets/images/pic06.jpg"
import pic07 from "../assets/images/pic07.jpg"
import pic08 from "../assets/images/pic08.jpg"
import jqueryMin from "../assets/assets/js/jquery.min.js"
import jqueryPoptroxMin from "../assets/assets/js/jquery.poptrox.min.js"
import skelMin from "../assets/assets/js/skel.min.js"
import util from "../assets/assets/js/util.js"
import main from "../assets/assets/js/main.js"
import '../assets/assets/css/main.css';


    export default function Index() {
      useEffect(() => {
        (async () => {
          before();
          if (typeof window !== undefined) {
            jqueryMin();
jqueryPoptroxMin();
skelMin();
util();
main();
          }
          after();
        })();
      }, []);

      return (
        <div>
        <><header id="header">
    <div className="logo"><a href="#">Caminar <span>by TEMPLATED</span></a></div>
  </header>
  {
      /* Main */
    }
  <section id="main">
    <div className="inner">
      {
          /* One */
        }
      <section id="one" className="wrapper style1">
        <div className="image fit flush">
          <img src={pic02} alt="" />
        </div>
        <header className="special">
          <h2>Fringilla Fermentum Tellus</h2>
          <p>vehicula urna sed justo bibendum</p>
        </header>
        <div className="content">
          <p>Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel. Vestibulum et efficitur urna. Duis velit nulla, interdum sed felis sit amet, facilisis auctor nunc. Cras luctus urna at risus feugiat scelerisque nec sed diam. </p>
          <p>Nunc fringilla metus odio, at rutrum augue tristique vel. Nulla ac tellus a neque ullamcorper porta a vitae ipsum. Morbi est sapien, hendrerit quis mi in, aliquam bibendum orci. Vestibulum imperdiet nibh vitae maximus posuere. Aenean sit amet nibh feugiat, condimentum tellus eu, malesuada nunc. Mauris ac pulvinar turpis, sit amet pharetra est. Ut bibendum justo condimentum, vehicula ex vel, venenatis libero. Etiam vehicula urna sed justo bibendum, ac lacinia nunc pulvinar. Integer nec velit orci. Vestibulum pellentesque varius dapibus. Morbi ullamcorper augue est, sed luctus orci fermentum dictum. Nunc tincidunt, nisl consequat convallis viverra, metus nisl ultricies dui, vitae dapibus ligula urna sit amet nibh. Duis ut venenatis enim.</p>
        </div>
      </section>
      {
          /* Two */
        }
      <section id="two" className="wrapper style2">
        <header>
          <h2>Vestibulum Convallis</h2>
          <p>vehicula urna sed justo bibendum</p>
        </header>
        <div className="content">
          <div className="gallery">
            <div>
              <div className="image fit flush">
                <a href="images/pic03.jpg"><img src={pic03} alt="" /></a>
              </div>
            </div>
            <div>
              <div className="image fit flush">
                <a href="images/pic01.jpg"><img src={pic01} alt="" /></a>
              </div>
            </div>
            <div>
              <div className="image fit flush">
                <a href="images/pic04.jpg"><img src={pic04} alt="" /></a>
              </div>
            </div>
            <div>
              <div className="image fit flush">
                <a href="images/pic05.jpg"><img src={pic05} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {
          /* Three */
        }
      <section id="three" className="wrapper">
        <div className="spotlight">
          <div className="image flush"><img src={pic06} alt="" /></div>
          <div className="inner">
            <h3>Viverra Hendrerit</h3>
            <p>Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel.</p>
          </div>
        </div>
        <div className="spotlight alt">
          <div className="image flush"><img src={pic07} alt="" /></div>
          <div className="inner">
            <h3>Curabitur Eget</h3>
            <p>Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel.</p>
          </div>
        </div>
        <div className="spotlight">
          <div className="image flush"><img src={pic08} alt="" /></div>
          <div className="inner">
            <h3>Morbi Eleifend</h3>
            <p>Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel.</p>
          </div>
        </div>
      </section>
    </div>
  </section>
  {
      /* Footer */
    }
  <footer id="footer">
    <div className="container">
      <ul className="icons">
        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
      </ul>
    </div>
    <div className="copyright">
      © Untitled. All rights reserved. Images <a href="https://unsplash.com/">Unsplash</a> Design <a href="https://templated.co/">TEMPLATED</a>
    </div>
  </footer>
  {
      /* Scripts */
    }
  </>

      </div>
      );
    }
  