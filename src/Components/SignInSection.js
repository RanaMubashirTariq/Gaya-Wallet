import React , {useState} from 'react'
import './SignInSection.css'
import { Link , useNavigate  } from 'react-router-dom';

export default function SignInSection() {
  const navigate = useNavigate();

  const handleNavigate = () =>{
    navigate('/dashboard');
  }

    const [showPassword , setShowPassword] = useState(false);

  return (
    <div className='sign-in-container'>

              <div className='sign-in-inner-div'>

             <div className='first-circle-shadow'></div>
             <div className='second-circle-shadow'><img src="/Pictures/vector.svg"/></div>
           
             <img src="/Pictures/GayaWallet-logo.svg" className='logo-img'/>
        

            {/*  Part 2 */}


            <div className='sign-in-box'>
                  <p>Sign In</p>

                  <div className='input-section-div'>
                    <label>Email</label><br/>
                     <input type="email" placeholder='Enter your email' /><br/>
                     <label>Password</label><br/>
                     <div className='icon-d'>
                            <input onChange={(e)=>setShowPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder='Enter Password...'/>
                                    <div className="toggle-btn" onClick={() => setShowPassword(!showPassword)}>
                                                 {showPassword ? <i class="fa-solid fa-eye"/> : <i class="fa-solid fa-eye-slash"/>} 
                                    </div>
                         </div>
                  </div>
                   
                <button className='sign-in-btn' onClick={handleNavigate}><Link>Sign In</Link></button>

            </div>
            </div>
    </div>
  )
}
