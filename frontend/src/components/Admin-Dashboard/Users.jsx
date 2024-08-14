import React from 'react';
import { Card, Title, Table, TableRow, TableCell } from '@tremor/react';
import {Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'John Doe', status: 'Logged In', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', status: 'Logged Out', email: 'jane@example.com' },
  { id: 3, name: 'Emily Johnson', status: 'Logged In', email: 'emily@example.com' },
];

export default function Users() {
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
        <Title className="mb-4 text-2xl font-bold text-gray-700">Users Management</Title>
        <Table>
          <thead>
            <tr>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Email</TableCell>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
