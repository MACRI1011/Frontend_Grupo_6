import { gql } from '@apollo/client'

const GET_INSCRIPCION_BY_ID = gql`
        query getInscripcionById($id: ID!){            
            inscripcionById (id: $id) {        
                proyecto_id {
                    nombre
                }
                usuario_id {
                    nombre
                }
                estado
                fechaIngreso
                fechaEgreso                
            }               
        }
    `;

export default GET_INSCRIPCION_BY_ID;