import React, { useContext, useState } from "react";
import { Link, getState, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const [ state, setState ] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const navigate = useNavigate();

    const handleChange = event => {
        setState({
          ...state,
          [event.target.name]: event.target.value,
        })
      }

    return (
        <>
            {/* <h1>Add Contacts View</h1> */}
            <div className="container">
                <div>
                    <h1 className="text-center mt-5">Add a new contact</h1>
                    <form>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                name="name"
                                className="form-control" 
                                placeholder="Full Name" 
                                value={state.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                name="email"
                                className="form-control" 
                                placeholder="Enter email" 
                                value={state.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input 
                                type="phone" 
                                name="phone"
                                className="form-control" 
                                placeholder="Enter phone"
                                value={state.phone}
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input 
                                type="text" 
                                name="address"
                                className="form-control"
                                placeholder="Enter address"
                                value={state.address}
                                onChange={handleChange}
                             />
                        </div>
                        <p></p>
                        <button 
                            type="button" 
                            className="btn btn-primary form-control"
                            onClick={
                                () => actions.createContact(
                                    state.name, 
                                    state.email, 
                                    state.phone, 
                                    state.address
                                ).then(()=> navigate("/"))
                            }
                        >
                            save
                        </button>
                        <p></p>
                        <Link className="mt-3 w-100 text-center" to="/">or go back to contacts</Link>
                    </form>
                </div>
            </div>
        </>
    );
}

// import Flux from "@4geeksacademy/react-flux-dash";
// import { Link } from "react-router-dom";

// export default class Contacts extends Flux.View {
//     render() {
//         return (
//             <div className="container">
//                 <div>
//                     <h1 className="text-center mt-5">Add a new contact</h1>
//                     <form>
//                         <div className="form-group">
//                             <label>Full Name</label>
//                             <input type="text" className="form-control" placeholder="Full Name" />
//                         </div>
//                         <div className="form-group">
//                             <label>Email</label>
//                             <input type="email" className="form-control" placeholder="Enter email" />
//                         </div>
//                         <div className="form-group">
//                             <label>Phone</label>
//                             <input type="phone" className="form-control" placeholder="Enter phone" />
//                         </div>
//                         <div className="form-group">
//                             <label>Address</label>
//                             <input type="text" className="form-control" placeholder="Enter address" />
//                         </div>
//                         <button type="button" className="btn btn-primary form-control">save</button>
//                         <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }