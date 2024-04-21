import React,{ useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';     // hook
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";


const Register = () => {
    const [name,setName] = useState("");                //getter,setter
    const [email,setEmail] = useState("");                //getter,setter
    const [password,setPassword] = useState("");                //getter,setter
    const [phone,setPhone] = useState("");                //getter,setter
    const [address,setAddress] = useState("");                //getter,setter
  const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    //form function
    const handleSubmit = async (e) => {                        // TARGETTING EVENT
        e.preventDefault();                                // by preventing default will not refresh and single page app will stay as it is
   /*      console.log(name,email,password,phone,address);
        toast.success('Regitred successfully') */
        try {
            const res = await axios.post('/api/v1/auth/register',
            {name,email,password,phone,address,answer});
            if(res && res.data.success){
                toast.success(res.data && res.data.message) ;                // message: 'User registered successfully'
                navigate("/login");                             // after success redirect to login page
            } 
            else{
                toast.error(res.data.message);                 // message: ''Already have an account,Please login'
            }
        
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    }


  return (
    <Layout title="Register E-commerce app">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>                        {/*custom function to handle submit*/}
          <h4 className="title">Register Form</h4>
            <div className="mb-3">
                <input type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="form-control" 
                id="exampleInputEmail1" 
                placeholder='Enter Your Name'
                required />
            </div>

            <div className="mb-3">
                <input type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="form-control" 
                id="exampleInputEmail1" 
                placeholder='Enter Your Email'
                required />
            </div>

            <div className="mb-3">
                <input type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder='Enter Your Password'
                required />
            </div>

            <div className="mb-3">
                <input type="text" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                className="form-control" 
                id="exampleInputEmail1" 
                placeholder='Enter Your Phone Number'
                required />
            </div>

            <div className="mb-3">
                <input type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)}
                className="form-control" 
                id="exampleInputEmail1" 
                placeholder='Enter Your Address'
                required />
            </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Who is your best friend"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>

      </div>
    </Layout>
  );
};

export default Register;
