import React, { Component} from 'react'
import RoleService from './RoleService.js'

class ListeRolesComponent extends Component {
    constructor(props){
    super(props)
    this.state = {
        roles: [{
            "id":1,
            "libelle": "formateur"
        },
            {
                "id":1,
                "libelle": "CM"
            }]
    }
        RoleService.getRoles().then(
            response =>
            {
                console.log(response)
    })
    }

    render() {
        
        return (
            <div>
                <h1>List des Roles</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Libelle</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.roles.map(
                                role =>
                                    <tr key={role.id}>
                                        <td>{role.libelle}</td>
                                    </tr>
                            )
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
  }

  export default ListeRolesComponent
