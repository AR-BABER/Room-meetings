"use client"

import React, { useState } from 'react'

interface User {
    username: string;
    email: string;
}

interface ChangePasswordFormProps {
    onSubmit: (newPassword: string) => void;
    onCancel: () => void;
}


export default function UserDetailsPage({ params }: { params: { id: string } }) {


    const initialUser: User = {
        username: 'ExampleUsername',
        email: 'example@example.com',
    };

    const [user, setUser] = useState<User>(initialUser);
    const [isChangingPassword, setIsChangingPassword] = useState<boolean>(false);

    const handleChangePassword = (newPassword: string): void => {
        // Handle password change logic here
        // For example, you can send a request to the server to update the password
        setIsChangingPassword(false);
    };

    return (
        <div className="h-screen flex justify-center items-center bg-black bg-opacity-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md md:grid md:gap-y-5 shadow-slate-600">
                <h2 className="text-2xl font-bold mb-6 text-pink-600">User Profile</h2>

                <div>

                    <div className="mb-4 flex justify-between w-full">
                        <strong>Username:</strong>
                        <span>{user.username}</span>
                    </div>
                    <div className="mb-4 flex justify-between w-full">
                        <strong>Email:</strong>
                        <span>{user.email}</span>
                    </div>
                </div>
                {isChangingPassword ? (
                    <ChangePasswordForm onSubmit={handleChangePassword} onCancel={() => setIsChangingPassword(false)} />
                ) : (
                    <button
                        onClick={() => setIsChangingPassword(true)}
                        className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
                    >
                        Change Password
                    </button>
                )}
            </div>
        </div>
    );
};

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({ onSubmit, onCancel }) => {
    const [newPassword, setNewPassword] = useState<string>('');

    const handleFormSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        onSubmit(newPassword);
    };

    return (
        <form className="mt-4" onSubmit={handleFormSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">New Password</label>
                <input
                    type="password"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">Confirm Password</label>
                <input
                    type="password"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </div>
            <div className="flex justify-between">
                <button
                    type="submit"
                    className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
                >
                    Save Password
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}
