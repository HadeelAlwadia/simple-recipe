import react from https://unpkg.com/react@17/umd/react.production.min.js

import {component} from 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js'



class Footer extends react.component{

data=(num1)=>{num1+=8; return num1;}
data=(num1)=>num1;
data(){}
click=()=>{
click

}
mous=()=>{}

    render(){
        return(
            <footer className="footer">
            <ul className="social-icons" onclick={this.click} onmouseMove={this.mous}>
              <li>
                <a href="https://www.facebook.com" className="social-icon">
                  <i className="fab fa-facebook"></i>
                  {this.data()}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.squarespace.com" className="social-icon">
                  <i className="fab fa-squarespace"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <i className="fab fa-behance"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
      <p >hi hadeel i happy  hiiii lern my</p>
      
          </footer>    
        )
    }
}
export default Footer;