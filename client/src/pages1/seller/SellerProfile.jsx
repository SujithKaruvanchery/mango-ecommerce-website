import React from 'react'
import useFetch from '../../hooks/useFetch';

function SellerProfile() {
    const [profileData,isLoading,error] = useFetch("/seller/profile")
    console.log("=======profiledata",profileData);
    
  return (
    <div>
      <h1>Profile</h1>
      <h1>{profileData?.data?.name}</h1>
      <h2>{profileData?.data?.email}</h2>
      <h2>{profileData?.data?.mobile}</h2>
      <img src={profileData?.data?.profilePicture}/>
    </div>
  )
}

export default SellerProfile
