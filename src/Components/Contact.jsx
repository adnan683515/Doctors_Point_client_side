import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AuthHook from '../Hooks/AuthHook';
import ProgressLoaindg from './../Share/ProgressLoaindg';
import useAxiosSecure from './../Hooks/AxiosSequre';
import EmojiPicker from 'emoji-picker-react';
import toast from 'react-hot-toast';
import Marquee from 'react-fast-marquee';
import { FaEdit, FaTrash } from "react-icons/fa";

const Contact = () => {




    const { user, loading } = AuthHook();
    const axiosSecure = useAxiosSecure();

    const [message, setMessage] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [allUsers, setAllusers] = useState([])
    const [username, setUsername] = useState("")







    const { isLoading: usersLoading, refetch: userRefect } = useQuery({
        queryKey: ['allusers'],
        enabled: !loading && !!user,
        queryFn: async () => {
            const res = await axiosSecure.get(`/allUsers/${user?.email}`);
            setAllusers(res?.data)
        }
    });



    const { data: allMsg = [], isLoading: isMsgLoading, refetch } = useQuery({
        queryKey: ['allmessage', user?.email, selectedUser?.email],
        enabled: !!user && !!selectedUser?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/allmsg/${user?.email}/${selectedUser?.email}`);
            return res?.data;
        }
    });

    useEffect(() => {
        if (!username) {
            userRefect()
            return
        }
        const searchBynameuser = async () => {
            const result = await axiosSecure.get(`/searchUser/${username}`)
            setAllusers(result?.data)
        }
        searchBynameuser()
    }, [axiosSecure, username])


    const handleUserSelect = async (email) => {
        const res = await axiosSecure.get(`/singleUser/${email}`);
        setSelectedUser(res?.data);
    };


    const handleEmojiClick = (emojiData) => {
        setMessage((prev) => prev + emojiData.emoji);
    };


    const handleSend = async () => {
        if (!message.trim()) return toast.error("Text You Message!");

        const newMsg = {
            sender: user?.email,
            senderName: user?.displayName,
            senderPhoto: user?.photoURL,
            reciver: selectedUser?.email,
            reciverName: selectedUser?.name,
            reciverPhoto: selectedUser?.image,
            message: message,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            send: user?.email
        };
        const res = await axiosSecure.post('/senderDataSave', newMsg);
        if (res?.data?.insertedId) {
            refetch();
            setMessage('');
        }
    };

    if (loading || usersLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <ProgressLoaindg />
            </div>
        );
    }

    return (
        <div className="w-[96%] mx-auto flex sm:flex-row flex-col gap-4">


            <div className="w-full sm:w-[30%] p-4">
                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Search user"
                    className="py-2 px-5 rounded-full w-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#007F5F]"
                />

                <div className="hidden sm:flex flex-col gap-2 mt-4">
                    {allUsers?.map((userItem) => (
                        <div
                            key={userItem._id}
                            onClick={() => handleUserSelect(userItem?.email)}
                            className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-200 rounded-md transition"
                        >
                            <img
                                src={userItem?.image}
                                alt="user"
                                className="w-10 h-10 rounded-full border-2 border-[#007F5F]"
                            />
                            <h1 className="text-gray-800 font-medium">{userItem?.name}  <span className={` ${userItem?.status === 'Admin' ? 'bg-amber-300 px-4 py-1 text-black rounded-sm' : 'bg-blue-500 px-4 text-white rounded-sm py-1'} `}>

                                {userItem?.status}
                            </span> </h1>
                        </div>
                    ))}
                </div>


                <div className="sm:hidden mt-4">
                    <Marquee speed={50} gradient={false} >
                        {allUsers?.map((userItem) => (
                            <div
                                key={userItem._id}
                                onClick={() => handleUserSelect(userItem?.email)}
                                className="flex flex-col items-center justify-center px-3 cursor-pointer hover:bg-gray-100 rounded-md transition min-w-[90px]"
                            >
                                <img
                                    src={userItem?.image}
                                    alt="user"
                                    className="w-12 h-12 rounded-full border-2 border-[#007F5F] object-cover"
                                />
                                <p className="text-xs mt-1 text-gray-800 text-center">{userItem?.name}   </p>
                                <span className={` ${userItem?.status === 'Admin' ? 'bg-amber-300 px-2 py-1 text-black rounded-sm' : 'bg-blue-500 px-2 text-white rounded-sm py-1'} `}>

                                    {userItem?.status}
                                </span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>


            <div className="w-full sm:w-[70%] mx-auto flex flex-col justify-between">

                {selectedUser && (
                    <div className="flex items-center gap-3 mt-3 py-4 text-black">
                        <div className="sm:w-[60px] w-[50px] aspect-square rounded-full border-[3px] border-gray-300 overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={selectedUser?.image}
                                alt="User"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-lg text-black font-medium">
                            <h1>{selectedUser?.name}  <span className={`${selectedUser?.status === 'Admin' ? 'bg-amber-300 px-2 py-1 text-black rounded-sm' : 'bg-blue-500 px-2 text-white rounded-sm py-1'}`}>
                                {selectedUser?.status} </span>  </h1>


                        </div>
                    </div>
                )}


                <div className={`
                sm:h-[65vh] h-[90vh] ${selectedUser && ' bg-green-100'} rounded-md p-2 overflow-y-auto mb-4 pr-2
                    `}>

                    {isMsgLoading ? (
                        <ProgressLoaindg />
                    ) : selectedUser ? (
                        allMsg?.length ? (
                            allMsg?.map((msg, idx) => {
                                const isSender = msg?.send === user?.email;

                                return isSender ? (
                                    <div key={idx} className="flex justify-end items-start mb-3">
                                        <div className="w-[80%] flex flex-col items-end">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-sm font-medium text-black">You</span>
                                                <img
                                                    src={msg?.senderPhoto}
                                                    alt="avatar"
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleEdit(msg)}
                                                        aria-label="Edit message"
                                                        className="p-2 rounded-full hover:bg-gray-200/30 transition"
                                                    >
                                                        <FaEdit size={18} className="text-sm cursor-pointer" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(msg)}
                                                        aria-label="Delete message"
                                                        className="p-2 rounded-full hover:bg-red-500/10 transition"
                                                    >
                                                        <FaTrash size={18} className="text-sm cursor-pointer " />
                                                    </button>
                                                </div>

                                                <div className="relative p-3 rounded-xl text-white bg-blue-500 max-w-[90%]">
                                                    <p className="text-sm break-words">{msg.message}</p>
                                                    <div className="text-xs text-right mt-1 opacity-70">
                                                        {msg.time} | {msg.date}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div key={idx} className="flex justify-start">
                                        <div className="w-[80%] flex flex-col items-start mb-3">
                                            <div className="flex items-center gap-2 mb-1">
                                                <img
                                                    src={msg?.senderPhoto}
                                                    alt="avatar"
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                                <span className="text-sm font-medium text-black">{msg?.senderName}</span>
                                            </div>
                                            <div className="p-3 rounded-xl text-white shadow-md bg-[#1E293B] max-w-[90%]">
                                                <p className="text-sm break-words">{msg.message}</p>
                                                <div className="text-xs text-right mt-1 opacity-70">
                                                    {msg.time} | {msg.date}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="flex justify-center items-center h-[200px]">
                                <p className="text-center text-lg font-semibold text-gray-300 px-6 py-4 border border-gray-600 rounded-xl bg-[#0f172a] shadow-lg">
                                    You haven’t sent or received any messages yet.
                                </p>
                            </div>
                        )
                    ) : (
                        <div className="flex justify-center items-center h-[200px]">
                            <p className="text-center text-lg font-semibold text-gray-300 px-6 py-4 border border-gray-600 rounded-xl bg-[#0f172a] shadow-lg">
                                Please select a user to start chatting.
                            </p>
                        </div>
                    )}


                </div>
                {selectedUser && (
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 text-black p-4 flex items-end gap-3 rounded-xl relative">
                        <textarea
                            rows="2"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-2 rounded-lg border border-gray-500/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none transition"
                        />
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setShowEmoji(!showEmoji)}
                                className="text-xl p-2 rounded-lg hover:bg-white/10 active:scale-95 transition"
                                title="Add Emoji"
                            >
                                😊
                            </button>
                            <button
                                onClick={handleSend}
                                className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-4 py-2 rounded-lg transition"
                            >
                                Send
                            </button>
                        </div>

                        {showEmoji && (
                            <div className="absolute bottom-[70px] left-0 z-50">
                                <EmojiPicker onEmojiClick={handleEmojiClick} />
                            </div>
                        )}


                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
