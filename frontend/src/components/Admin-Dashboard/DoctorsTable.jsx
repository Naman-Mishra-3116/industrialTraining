import React from 'react';
import { Card, Title, Table, TableRow, TableCell } from '@tremor/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const doctors = [
  { SNo: 1, name: 'Dr. Alice Green', specialty: 'Cardiologist', email: 'alice@example.com', phone: '4984503448' },
  { SNo: 2, name: 'Dr. Bob Brown', specialty: 'Neurologist', email: 'bob@example.com', phone: '4984503448' },
  { SNo: 3, name: 'Dr. Carol White', specialty: 'Dermatologist', email: 'carol@example.com', phone: '4984503448' },
];


export default function DoctorsTable() {
  return (
    <div className='flex'>
      <div className="w-1/4 bg-blue-800 p-6 text-white">
        <h2 className="text-3xl font-bold mb-6">Medicare Admin Dashboard</h2>
        <ul>
          <li className="mb-4">
            <Link to="/admin-home" className="text-lg">Home</Link>
          </li>
          <li className="mb-4">
            <Link to="/users" className="text-lg">Users</Link>
          </li>
          <li className="mb-4">
            <Link to="/doctors-list" className="text-lg">Doctors</Link>
          </li>
          <li className="mb-4">
            <Link to="/appointments" className="text-lg">Appointments</Link>
          </li>
        </ul>
      </div>
      <Card className="bg-white shadow-lg rounded-lg p-6">
        <Title className="mb-4 text-2xl font-bold text-gray-700">Doctors Management</Title>
        <Table>
          <thead>
            <tr>
              <TableCell>SNo.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Specialty</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Status</TableCell>
            </tr>
          </thead>
          <tbody>
            {doctors.map(doctor => (
              <TableRow key={doctor.SNo}>
                <TableCell>{doctor.SNo}</TableCell>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.specialty}</TableCell>
                <TableCell>{doctor.email}</TableCell>
                <TableCell>{doctor.phone}</TableCell>
                
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
