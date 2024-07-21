import React, { useContext } from 'react';
import { useActionData, useNavigate } from "react-router-dom";
import { Context } from '../store/appContext';

export const ContactCard = ({contact}) => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();
    
    return (
        <li className="list-group-item">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-10">
                    <img src="https://images.pexels.com/photos/52967/canthigaster-cicada-fulgoromorpha-insect-proboscis-52967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={contact.name} className="rounded-circle mx-auto d-block img-fluid" />
                </div>
                <div className="col-12 col-sm-6 col-md-9  text-sm-left">
                    <div className='row'>
                        <div className='col-9'>
                            <label className="name lead"><h1>{contact.name}</h1></label>
                            <br /> 
                            <i className="fas fa-map-marker-alt text-muted mr-3"></i>
                            <span className="text-muted">  {contact.address}</span>
                            <br />
                            <span className="fa fa-phone fa-fw text-muted mr-3" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                            <span className="text-muted small">  {contact.phone}</span>
                            <br />
                            <span className="fa fa-envelope fa-fw text-muted mr-3" data-toggle="tooltip" data-original-title="" title=""></span>
                            <span className="text-muted small text-truncate">  {contact.email}</span>
                        </div>
                        <div className="col-3">
                            <button 
                                className="btn" 
                                onClick={
                                    () => {
                                        navigate("./add");
                                    }}
                            >
                                <i className="fas fa-pencil-alt mr-3"></i>
                            </button>
                            <button 
                                className="btn" 
                                onClick={
                                    () => actions.removeContact(contact.id)
                                    .then(()=> actions.getContacts())
                                }
                            >
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}