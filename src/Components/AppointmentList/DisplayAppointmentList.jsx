import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Typography, Box } from '@mui/material';


import DisplayTr from './DisplayTr';
import AuthHook from '../../Hooks/AuthHook';



export default function DisplayAppointmentList({ doctorWiseAppointment = [] }) {

    const {user} = AuthHook()

    return (
        <TableContainer
            component={Paper}
            sx={{
                maxHeight: 400,

            }}
        >
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Serial Number</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {doctorWiseAppointment?.map((item, index) => {
                        return <DisplayTr user={user} item={item} index={index}></DisplayTr>

                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
