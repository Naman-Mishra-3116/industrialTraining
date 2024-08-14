import React from 'react';
import { AreaChart, Card, Title, BarList } from '@tremor/react';
import { Link } from 'react-router-dom';

const generateData = () => {
  let dataset = [];
  const dates = [
    'Jun 30', 'Jul 01', 'Jul 02', 'Jul 03', 'Jul 04', 'Jul 05', 'Jul 06',
    'Jul 07', 'Jul 08', 'Jul 09', 'Jul 10', 'Jul 11', 'Jul 12', 'Jul 13',
    'Jul 14', 'Jul 15', 'Jul 16', 'Jul 17',
  ];

  for (let date of dates) {
    dataset.push({
      date,
      'logged-in-users': Math.round(50 + Math.random() * 10),
      'logged-out-users': Math.round(30 + Math.random() * 10),
      'appointments': Math.round(20 + Math.random() * 10),
    });
  }

  return dataset;
};

const mockDataset = generateData();

export default function Dashboard() {
  return (
    <div>
      <header className="mb-8">
        <div className='flex'>
        <div>
        <h1 className="text-2xl font-bold mb-2">Clinic Overview</h1>
        <p className="text-gray-600">Welcome to your clinic dashboard. Here's the latest summary of your clinic's activity.</p>
        </div>
        <Link to='/create-admin'>
        <button className='ml-80 text-white bg-primaryColor pl-4 pr-4 rounded-full hover:bg-blue-500 font-semibold p-2'>Add Admin</button>
        </Link>
        </div> 
      </header>

      <div className="grid grid-cols-3 gap-3">
        {/* Logged In Users */}
        <Card className="bg-white shadow-lg rounded-lg p-6">
          <Title className="mb-4 text-lg font-bold text-gray-700 leading-9">Users</Title>
          <div className="">
          </div>
        </Card>

        <Card className="bg-white shadow-lg rounded-lg p-6">
          <Title className="mb-4 text-lg font-bold text-gray-700 leading-9">Doctors</Title>
          <div className="">
          </div>
        </Card>

        {/* Appointment Bookings */}
        <Card className="bg-white shadow-lg rounded-lg p-6">
          <Title className="mb-4 text-lg font-bold text-gray-700">Appointment Bookings</Title>
          <div className="card-content">
          </div>
        </Card>
      </div>

      {/* Line Chart for Activity */}
      <Card className="bg-gradient-to-r from-blue-100 to-purple-100 shadow-lg rounded-lg p-6 mt-8 border border-gray-300">
        <Title className="mb-4 text-3xl font-extrabold text-gray-900">Clinic Activity</Title>
        <AreaChart
          className="mt-4 h-80"
          data={mockDataset}
          categories={['logged-in-users', 'logged-out-users', 'appointments']}
          index="date"
          colors={['blue-500', 'rose-500', 'lime-500']}
          allowDecimals={false}
          yAxisWidth={60}
          noDataText="No data available"
        />
      </Card>

    </div>
  );
}
