import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Axios from 'axios';

function MyDropzone({ setGifList }) {
  const onDrop = useCallback(acceptedFiles => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    formData.append("upload_preset","ky7yerku");

    Axios.post("https://api.cloudinary.com/v1_1/dypa90ddz/image/upload", formData).then((response)=>{
      setGifList((gifList)=>({
        response,
        ...gifList
      }))
    })

  }, [setGifList])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default MyDropzone;