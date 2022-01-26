import React from 'react';

const StudentHeaderComponent = (props) => {
        function candidateLevelBadge(){
        switch (props.status) {
            case "libre":
                return(
                    <div className='status-main'>
                        <span className='status bg-powerblue'>PDTE. OFERTAS</span>
                    </div>
                )
            case "en_proceso":
                return(
                    <div className='status-main'>
                        <span className='status bg-blue'>
                        PRESELECIONADO
                        </span>
                    </div>
                )
            case "contratado":
                return(
                    <div className='status-main'>
                        <span className='status bg-powergreen'>
                            {props.status}
                        </span>
                    </div>
                )
            case "descartado":
                return(
                    <div className='status-main'>
                        <span className='status bg-wrong'>
                            RECHAZADO
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

    let remoto;
    if(props.remote===true){
        remoto="En Remoto"
    }else{
        remoto ="Presencial"
    }

    let traslado;
    if(props.transfer===true){
        traslado="Con Traslado"
    }else{
        traslado ="Sin Traslado"
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
                                    <p>{remoto}</p>
                                    <span>,</span>
                                    <p>{traslado}</p>
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
