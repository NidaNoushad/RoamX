import React from 'react';
import './Footer.css';
import RoamX1 from '../src/assets/images/RoamX1.png'
const Footer = () => {
  return (
    <div className='footer'>
      <hr className='mb-5' />
      <div className='socialmedia mb-3' >
      <button class="btn1 btn-square">
  <svg style={{color: "blue"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 .198a8 8 0 0 0-2.534 15.602c.4.074.548-.174.548-.384l-.009-1.342c-2.238.486-2.709-1.072-2.709-1.072a2.122 2.122 0 0 0-.895-1.17c-.728-.498.055-.488.055-.488a1.68 1.68 0 0 1 1.223.827c.712 1.186 1.87.843 2.326.646a1.72 1.72 0 0 1 .474-1.062c-1.656-.187-3.395-.825-3.395-3.688a2.887 2.887 0 0 1 .77-2.005 2.674 2.674 0 0 1 .072-2.005s.633-.204 2.076.778a7.376 7.376 0 0 1 3.936 0c1.443-.982 2.075-.778 2.075-.778a2.672 2.672 0 0 1 .072 2.005 2.888 2.888 0 0 1 .77 2.005c0 2.869-1.741 3.499-3.401 3.681a1.785 1.785 0 0 1 .497 1.395l-.007 2.174c0 .213.143.465.55.384A8 8 0 0 0 8 .198z " fill="blue"/>
  </svg>
</button>

<button class="btn1">
 <svg style={{color: "blue"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="blue"></path></svg>
</button>

<button class="btn1">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
    <path d="M0 1.25C0 .56.56 0 1.25 0h13.5C15.44 0 16 .56 16 1.25v13.5c0 .69-.56 1.25-1.25 1.25h-13.5C.56 16 0 15.44 0 14.75V1.25zM4.022 13.345H2.104V6.286h1.918v7.06zm-1.02-8.56a1.06 1.06 0 1 1 0-2.12 1.06 1.06 0 0 1 0 2.12zm9.453 8.56h-1.92V9.967c0-1.257-.027-2.872-1.748-2.872-1.748 0-2.015 1.365-2.015 2.774v4.426h-1.92V6.286h1.854v1.472h.027c.258-.49.89-1.01 1.83-1.01 1.23 0 2.156.8 2.156 2.502v4.095zM15.5 0H1.5A1.5 1.5 0 0 0 0 1.5v13.5A1.5 1.5 0 0 0 1.5 16h14.004a1.5 1.5 0 0 0 1.496-1.496V1.5A1.5 1.5 0 0 0 15.5 0z" fill="blue"></path>
  </svg>
</button>
      </div>
      <div>
      <img src={RoamX1} alt="" />
      </div>
      <div className='text-center '>
<p className='lead' style={{fontSize:"0.9rem"}}>&copy; 2023 RoamX-by Nida Noushad. All rights reserved.</p>
      </div>
      </div>
    
  );
};

export default Footer;

