import React, { Component } from 'react';
import TenantService from '../services/TenantService';

class ListTenantComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tenants: [] // Initialize tenants in state
        };
    }

    componentDidMount() {
        TenantService.getTenants().then((res) => {
            this.setState({tenants: res.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> Tenants List:</h1>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Tenant First Name:</th>
                                <th> Tenant Last Name: </th>
                                <th> Tenant Contact Number: </th>
                                <th> Tenant Email Id </th>
                                <th> Tenant Registration Date: </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tenants.map( 
                                    tenant =>
                                        <tr key={tenant.id}>
                                            <td> {tenant.firstName} </td>
                                            <td> {tenant.lastName} </td>
                                            <td> {tenant.contactNumber} </td>
                                            <td> {tenant.emailId} </td>
                                            <td> {tenant.registrationDate} </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTenantComponent;
   