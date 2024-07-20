import React, { useContext } from "react";
import { Link, redirect } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext";

// import { disableValidation } from "schema-utils";

export const Contacts = ()=> {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div>
                <p className="text-right my-3">
                    <Link className="btn btn-success" to="/add">Add new contact</Link>
                </p>
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <ul className="list-group pull-down" id="contact-list">
                        {store.contacts.map((contact) => {
                            return <ContactCard key={contact.id} contact={contact}/>
                        })}
                        {/* <ContactCard onDelete={() => this.setState({ showModal: true})} /> */}
                        {/* <ContactCard />
                        <ContactCard />
                        <ContactCard /> */}
                    </ul>
                </div>
            </div>
            {/* <Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} /> */}
        </div>
    )
}

// import Flux from "@4geeksacademy/react-flux-dash";
// import { Link } from "react-router-dom";

// import ContactCard from '../components/ContactCard';
// import Modal from '../components/Modal';
// import avatar1 from '../../img/user_1.jpg';

// export default class Contacts extends Flux.View {
//     constructor(){
//         super();
//         this.state = {
//             showModal: false  
//         };
//     }
//     render() {
//         return (
//             <div className="container">
//                 <div>
//                     <p className="text-right my-3">
//                         <Link className="btn btn-success" to="/add">Add new contact</Link>
//                     </p>
//                     <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
//                         <ul className="list-group pull-down" id="contact-list">
//                             <ContactCard onDelete={() => this.setState({ showModal: true})} />
//                             <ContactCard />
//                             <ContactCard />
//                             <ContactCard />
//                         </ul>
//                     </div>
//                 </div>
//                 <Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
//             </div>
//         );
//     }
// }