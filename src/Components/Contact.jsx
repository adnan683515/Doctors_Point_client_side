import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import AuthHook from '../Hooks/AuthHook';
import ProgressLoaindg from './../Share/ProgressLoaindg';
import useAxiosSecure from './../Hooks/AxiosSequre';
import EmojiPicker from 'emoji-picker-react';

const Contact = () => {
    const { user, loading } = AuthHook();
    const axiosSecure = useAxiosSecure();

    const [message, setMessage] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);


    const { data: allUsers = [], isLoading: usersLoading } = useQuery({
        queryKey: ['allusers'],
        enabled: !loading && !!user,
        queryFn: async () => {
            const res = await axiosSecure.get(`/allUsers/${user?.email}`);
            return res?.data;
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


    const handleUserSelect = async (email) => {
        const res = await axiosSecure.get(`/singleUser/${email}`);
        setSelectedUser(res?.data);
    };


    const handleEmojiClick = (emojiData) => {
        setMessage((prev) => prev + emojiData.emoji);
    };


    const handleSend = async () => {
        if (!message.trim()) return;

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
                    placeholder="Search user"
                    className="py-2 px-5 rounded-full w-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#007F5F]"
                />

                {allUsers?.map((userItem) => (
                    <div
                        key={userItem._id}
                        onClick={() => handleUserSelect(userItem?.email)}
                        className="flex items-center gap-3 mt-4 p-2 cursor-pointer hover:bg-gray-200 rounded-md transition"
                    >
                        <img
                            src={userItem?.image}
                            alt="user"
                            className="w-10 h-10 rounded-full border-2 border-[#007F5F]"
                        />
                        <h1 className="text-gray-800">{userItem?.name}</h1>
                    </div>
                ))}
            </div>


            <div className="w-full sm:w-[70%] mx-auto flex flex-col justify-between">

                {selectedUser && (
                    <div className='flex gap-2 px-4 mt-3 py-4 text-black'>
                        <div className='w-[5%] rounded-full border'>
                            <img className='rounded-full' src={selectedUser?.image} alt="User" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <h1>{selectedUser?.name}</h1>
                        </div>
                    </div>
                )}


                <div className="sm:h-[65vh] overflow-y-auto mb-4 pr-2">
                    {isMsgLoading ? (
                        <ProgressLoaindg />
                    ) : (
                        allMsg?.map((msg, idx) => {
                            const isSender = msg?.send === user?.email;

                            return isSender ? (

                                <div key={idx} className="flex justify-end">
                                    <div className="w-[80%] flex flex-col items-end mb-3">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm font-medium">You</span>
                                            <img
                                                src={msg?.senderPhoto}
                                                alt="avatar"
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                        </div>
                                        <div className="p-3 rounded-xl text-white shadow-md bg-blue-500 max-w-[90%]">
                                            <p className="text-sm break-words">{msg.message}</p>
                                            <div className="text-xs text-right mt-1 opacity-70">
                                                {msg.time} | {msg.date}
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
                                            <span className="text-sm font-medium">{msg?.senderName}</span>
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
                    )}
                </div>
                {selectedUser && (
                    <div className="bg-white shadow-md p-4 flex items-end gap-2 rounded-lg relative">
                        <textarea
                            rows="2"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setShowEmoji(!showEmoji)}
                                className="text-2xl px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                                title="Add Emoji"
                            >
                                😊
                            </button>
                            <button
                                onClick={handleSend}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
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
