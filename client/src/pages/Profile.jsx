import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { FaCheckCircle } from "react-icons/fa";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { updateUserFailure, updateUserStart, updateUserSuccess } from "../redux/user/userSlice";

function Profile() {
  const { currentUser, error, loading } = useSelector((state) => state.user);
  const fileRef = useRef(null); //create a reference for file input field
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  // console.log(file);
  // console.log(filePerc);
  // console.log(fileUploadError);
  // console.log(formData);

  const [updateSuccess, setUpdateSuccess] = useState(false)
  const dispatch = useDispatch()

  // add file to firebase
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file); // to show the download %

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('Upload is ' + progress + '% done.')
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    })
  }

  // this function is as similar to sign in function 
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      dispatch(updateUserStart())
      const res = await fetch(`/server/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if(data.success === false){
        dispatch(updateUserFailure(data.message))
        return 
      }

      dispatch(updateUserSuccess(data))
      setUpdateSuccess(true)

    } catch(error){
      dispatch(updateUserFailure(error.message))
    }

  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-green-700 text-3xl font-semibold text-center my-7">
        Profile
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt="profile_image"
          className="rounded-full h-24 w-24 object-cover cursor-pointer mt-2 self-center"
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-600">
              Error Image Upload (Image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-green-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            // <div className="border-red-500 flex text-indigo-950 gap-2">
            //   <span>
            //     <FaCheckCircle />
            //   </span>
            <span>Image Successfully uploaded!</span>
          ) : (
            // </div>
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="username"
          defaultValue={currentUser.username}
          id="username"
          className="border p-3 rounded-xl"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          defaultValue={currentUser.email}
          id="email"
          className="border p-3 rounded-xl"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-xl"
        />
        <button disabled={loading } className="bg-green-700 p-3 rounded-xl text-white uppercase hover:opacity-95 disabled:opacity-60">
          {loading ? 'Loading...' : 'Update'}
        </button>
      </form>
      <div className="flex justify-between mt-3">
        <span className="text-red-600 rounded-xl p-3 font-bold cursor-pointer hover:bg-red-100">
          Delete Account
        </span>
        <span className="text-red-600 rounded-xl p-3 font-bold cursor-pointer hover:bg-red-100">
          Sign Out
        </span>
      </div>
      <p className="text-red-500 mt-4">{error ? error : ''}</p>
      <p className="text-center font-semibolde">{updateSuccess ? 'User is updated successfully!' : ''}</p>
    </div>
  );
}

export default Profile;
