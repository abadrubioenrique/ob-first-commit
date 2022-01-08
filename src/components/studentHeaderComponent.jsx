import React from 'react';
import {CANDIDATE_STATUS} from '../models/candidate-enum';

const StudentHeaderComponent = (props) => {
    function candidateLevelBadge(){
        switch (props.status) {
            case CANDIDATE_STATUS.PDTE:
                return(
                    <div className='status-main'>
                        <span className='status bg-powerblue'>{props.status}</span>
                    </div>
                )
            case CANDIDATE_STATUS.PRESELECIONADO:
                return(
                    <div className='status-main'>
                    <span className='status bg-blue'>
                        {props.status}
                    </span>
                    </div>
                )
            case CANDIDATE_STATUS.CONTRATADO:
                return(
                    <div className='status-main'>
                    <span className='status bg-powergreen'>
                        {props.status}
                    </span>
                    </div>
                )
            default:
                return(
                    <div className='status-main'>
                    <span className='status bg-grey'>
                        No definido
                    </span>
                    </div>
                )
        }
    }
    return (
        <div className="student-info">
                        <img className="student-img" src="https://st.depositphotos.com/2251265/2417/i/600/depositphotos_24172293-stock-photo-faceless-person-portrait.jpg" alt='profile_img'/>
                            <div id="student-name" className="student-name">
                            <h1>{props.name}</h1>
                            <div className='student-subinfo'>
                                <div className="student-ubication">
                                    <i className="bi bi-geo-alt"></i>
                                    <p>{props.city}</p>
                                    <span>,</span>
                                    <p>{props.country}</p>
                                </div>
                                <div className="student-remote">
                                <i className="bi bi-bullseye"></i>
                                    <p>{props.remote}</p>
                                    <span>,</span>
                                    <p>{props.transfer}</p>
                                </div>
                            </div>
                            <div className='candidate-status'>
                                <h1>Estado del Candidato:</h1>
                                <span>{candidateLevelBadge()}</span>
                            </div>

                            </div>
                    </div>
    );
}

export default StudentHeaderComponent;
