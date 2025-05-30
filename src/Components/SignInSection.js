import React , {useState} from 'react'
import './SignInSection.css'
import { Link , useNavigate  } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

export default function SignInSection() {
  const navigate = useNavigate();

    const [showPassword , setShowPassword] = useState(false);
    const [email , setEmail] = useState('');
    const [password , setPassword] =useState('')


    const signIn = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in:", userCredential.user);
          navigate('/dashboard');
        alert("Sign in successful! 🎉");
      } catch (error) {
        console.error("Error signing in:", error.message);
        alert(error.message);  // Show error to user
      }
    };

  return (
    <div className='sign-in-container'>

              <div className='sign-in-inner-div'>

             <div className='first-circle-shadow'></div>
             <div className='second-circle-shadow-2'><img src="/Pictures/vector.svg"/></div>
           
             <img src="/Pictures/GayaWallet-logo.svg" className='logo-img'/>
        

            {/*  Part 2 */}


            <div className='sign-in-box'>
                  <p>Sign In</p>

                  <div className='input-section-div'>
                    <label>Email</label><br/>
                     <input  type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} /><br/>
                     <label>Password</label><br/>
                     <div className='icon-d'>
                            <input onChange={(e)=>setPassword(e.target.value)} type={showPassword ? "text" : "password"}  placeholder='Enter Password...'/>
                                    <div className="toggle-btn" onClick={() => setShowPassword(!showPassword)}>
                                                 {showPassword ? <i class="fa-solid fa-eye"/> : <i class="fa-solid fa-eye-slash"/>} 
                                    </div>
                         </div>
                  </div>
                   
                <button className='sign-in-btn' onClick={signIn }><Link to={'/dashboard'}>Sign In</Link></button>

            </div>
            </div>
    </div>
  )
}
