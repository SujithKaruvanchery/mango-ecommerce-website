import React from "react";
import useFetch from "../../hooks/useFetch";

function Profile() {
  const [profileData, isLoading, error] = useFetch("/user/profile");
  console.log("=======profiledata", profileData);

  return (
    <div>
      <div className="flex flex-col items-center p-6 rounded-none  max-w-md mx-auto mt-10">
        <img
          src={profileData?.data?.profilePicture}
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h1 className="text-2xl mb-2">{profileData?.data?.name}</h1>
        <h2 className="text-lg mb-1">{profileData?.data?.email}</h2>
        <h2 className="text-lg mb-4">{profileData?.data?.mobile}</h2>

        <div className="flex space-x-4">
          <button className="btn btn-primary px-4 py-2">Edit Profile</button>
          <button className="btn btn-secondary px-4 py-2">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
