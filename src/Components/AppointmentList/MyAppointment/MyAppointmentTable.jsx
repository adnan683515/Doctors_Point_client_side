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

// Row Component
function AppointmentRow({ row }) {
    const [open, setOpen] = React.useState(false);

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
                <TableCell>{row?.email}</TableCell>
                <TableCell>{row?.date}</TableCell>
                <TableCell>{row?.day}</TableCell>
                <TableCell>{row?.time}</TableCell>
                <TableCell>{row?.phone}</TableCell>
                <TableCell>{row?.visiFee} ৳</TableCell>
            </TableRow>

            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="body2" gutterBottom component="div">
                                {/* Details here */}
                                বিস্তারিত তথ্য শীঘ্রই আসছে...
                            </Typography>
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

// Table Component
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
