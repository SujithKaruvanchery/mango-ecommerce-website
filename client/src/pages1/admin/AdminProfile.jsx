import React from 'react';
import useFetch from '../../hooks/useFetch';

function AdminProfile() {
    const [profileData, isLoading, error] = useFetch("/admin/profile");
    console.log("=======profiledata", profileData);

    return (
        <div>
            <h1>Admin Profile</h1>
            <h1>{profileData?.data?.name}</h1>
            <h2>{profileData?.data?.email}</h2>
            <h2>{profileData?.data?.mobile}</h2>
            <img src={profileData?.data?.profilePicture} alt="Admin Profile" />
        </div>
    );
}

export default AdminProfile;
