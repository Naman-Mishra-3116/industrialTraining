import React from 'react';
import { Card, Title, Table, TableRow, TableCell } from '@tremor/react';
import {Link } from 'react-router-dom';

const appointments = [
  { id: 1, patient: 'John Doe', date: '2024-08-14', time: '10:00 AM', status: 'Confirmed' },
  { id: 2, patient: 'Jane Smith', date: '2024-08-15', time: '11:00 AM', status: 'Pending' },
  { id: 3, patient: 'Emily Johnson', date: '2024-08-16', time: '01:00 PM', status: 'Completed' },
];

export default function Appointments() {
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
        <Title className="mb-4 text-2xl font-bold text-gray-700">Appointments Management</Title>
        <Table>
          <thead>
            <tr>
              <TableCell>ID</TableCell>
              <TableCell>Patient</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Status</TableCell>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.id}</TableCell>
                <TableCell>{appointment.patient}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.status}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
