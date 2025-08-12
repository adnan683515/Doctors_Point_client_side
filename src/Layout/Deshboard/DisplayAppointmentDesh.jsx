import React from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/AxiosSequre';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: blue[200],
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const DisplayAppointmentDesh = ({ row, index }) => {

    const axiosUrl  = useAxiosSecure()
    const {data : userDetails = {}} = useQuery({
        queryKey : ['user',row?.email],
        queryFn  : (async ()=>{
            const result = await axiosUrl.get(`/singleUser/${row?.email}`)
            return result?.data
        })
    })


    return (
        <StyledTableRow key={index}>
    
            <StyledTableCell component="th" scope="row">
                {userDetails?.name}
            </StyledTableCell>
            <StyledTableCell align="right">{row?.date} &amp; {row?.time}</StyledTableCell>
            <StyledTableCell align="right">{row?.status}</StyledTableCell>
            <StyledTableCell align="right">{row?.carbs}</StyledTableCell>
            <StyledTableCell align="right">
                View Delete
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default DisplayAppointmentDesh;
