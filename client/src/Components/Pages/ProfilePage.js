import { useEffect } from 'react';
import Axios from 'axios';
import MyDropzone from '../Modules/MyDropzone';

function ProfilePage({ user, username, gifList, setGifList }) {

  const curl = "https://296312195496885:qvXgdRaJo63zsfU-chwnJKydeb4@api.cloudinary.com/v1_1/dypa90ddz/resources/image"

  // useEffect(()=>{
    // Axios.get("http://res.cloudinary.com/<cloud_name>/image").then((response)=>{
    //   setGifList(response)
    // })

  //   fetch(curl)
  //   .then(res=>res.json())
  //   .then(data=>console.log(data))
  // },[setGifList])

  return(
    <>
      <h2>This is the profile page, {user.username}</h2>
      <MyDropzone 
        setGifList={setGifList}
      />
      {/* {gifList &&
        gifList.map(gif=>{
          return <p>this is a gif</p>
        })
      } */}
    </>
  )
}

export default ProfilePage;