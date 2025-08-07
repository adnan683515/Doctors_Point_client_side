import React from 'react';
import useAxiosSecure from '../../Hooks/AxiosSequre';
import { useQuery } from '@tanstack/react-query';
import { Avatar, TableCell, TableRow, Typography, Box } from '@mui/material'; // 🟢 Fixed this import

const DisplayTr = ({user, item, index }) => {
    const axiosHook = useAxiosSecure();
    

    const { data: userRINFO = {} } = useQuery({
        queryKey: ['singleuer', item?.email],
        queryFn: async () => {
            const result = await axiosHook.get(`/singleUser/${item?.email}`);
            return result?.data;
        },
    });



    return (
        <TableRow className={` ${user?.email === item?.email ? 'bg-green-200' : '' } `} key={item._id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
                <Box  display="flex" alignItems="center" gap={1}>
                    <Avatar
                        alt={userRINFO?.name || 'Avatar'}
                        src={userRINFO?.image}
                        sx={{ width: 30, height: 30 }}
                    />
                    <Typography fontSize={14}>
                        {userRINFO?.name || 'Unknown'}
                    </Typography>
                </Box>
            </TableCell>
            <TableCell>
                <Typography fontSize={14}>{item.address}</Typography>
            </TableCell>
            <TableCell>
                <Typography fontSize={14} color="primary">
                    {item.status}
                </Typography>
            </TableCell>
        </TableRow>
    );
};

export default DisplayTr;
