import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useAxiosSecure from '../../../Hooks/AxiosSequre';
import { useQuery } from '@tanstack/react-query';
import AuthHook from '../../../Hooks/AuthHook';
import { Grid } from 'lucide-react';
import { Avatar, Button } from '@chatui/core';


function AppointmentRow({ row }) {
    const [open, setOpen] = React.useState(false);
    const axiosUrl = useAxiosSecure()


    const { data: details = {} } = useQuery({
        queryKey: ['info', row?.email],
        enabled: !!row?.email,
        queryFn: (async () => {
            const result = await axiosUrl.get(`/singleUser/${row?.email}`)
            return result?.data
        })
    })
    const { data: Doctordetails = {} } = useQuery({
        queryKey: ['infoDoctor', row?.doctorId],
        enabled: !!row?.doctorId,
        queryFn: (async () => {
            const result = await axiosUrl.get(`/singleDoctor/${row?.doctorId}`)
            return result?.data
        })
    })


    console.log(Doctordetails)




    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{details?.name}</TableCell>
                <TableCell>{row?.date}</TableCell>
                <TableCell>{row?.day}</TableCell>
                <TableCell>{row?.time}</TableCell>
                <TableCell>{row?.phone}</TableCell>
                <TableCell>{row?.visiFee} ৳</TableCell>
            </TableRow>

            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">


                            </Table>


                            <Box
                                sx={{
                                    mt: 3,
                                    p: 2,
                                    border: '1px solid #ddd',
                                    borderRadius: 2,
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { xs: 'flex-start', sm: 'center' },
                                    gap: 2,
                                }}
                            >

                                <Box sx={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>

                                    <Typography variant="body2" sx={{ minWidth: '45%' }}>
                                        <strong>Name:</strong> <span style={{ textDecoration: 'underline' ,cursor : 'pointer' }}>{Doctordetails.name}</span>
                                    </Typography>

                                    <Typography variant="body2" sx={{ minWidth: '45%' }}>
                                        <strong>Department:</strong> {Doctordetails.department}
                                    </Typography>
                                    <Typography variant="body2" sx={{ minWidth: '45%' }}>
                                        <strong>Designation:</strong> {Doctordetails.designation}
                                    </Typography>
                                    <Typography variant="body2" sx={{ minWidth: '45%' }}>
                                        <strong>Experience:</strong> {Doctordetails.experience} years
                                    </Typography>
                                    <Typography variant="body2" sx={{ minWidth: '45%' }}>
                                        <strong>Phone:</strong> {Doctordetails.phone}
                                    </Typography>
                                </Box>


                            </Box>
                        </Box>



                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

AppointmentRow.propTypes = {
    row: PropTypes.shape({
        email: PropTypes.string,
        date: PropTypes.string,
        day: PropTypes.string,
        time: PropTypes.string,
        phone: PropTypes.string,
        visiFee: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
};


export default function MyAppointmentTable({ data }) {
    return (
        <TableContainer
            component={Paper}
            sx={{
                borderRadius: 3,
                backgroundColor: 'transparent',
                boxShadow: 'none',
                overflow: 'hidden',
            }}
        >
            <Table aria-label="collapsible appointment table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#E0F2F1' }}>
                        <TableCell />
                        <TableCell><strong>Name (Email)</strong></TableCell>
                        <TableCell><strong>Date</strong></TableCell>
                        <TableCell><strong>Day</strong></TableCell>
                        <TableCell><strong>Time</strong></TableCell>
                        <TableCell><strong>Phone</strong></TableCell>
                        <TableCell><strong>Visit Fee</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((appointment) => (
                        <AppointmentRow key={appointment._id} row={appointment} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

MyAppointmentTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            email: PropTypes.string,
            date: PropTypes.string,
            day: PropTypes.string,
            time: PropTypes.string,
            phone: PropTypes.string,
            visiFee: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        })
    ).isRequired,
};
