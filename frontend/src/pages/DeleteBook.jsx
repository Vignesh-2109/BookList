import React,{useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack';


const DeleteBook = () => {
  const[loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const{id}=useParams();
  const { enqueueSnackbar}=useSnackbar();
  const handleDeleteBook=()=>{
    setLoading(true);
    axios
    .delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
     setLoading(false);
     enqueueSnackbar('Deleted Bro',{ variant:'success'});
     navigate('/');
    })
    .catch((error)=>{
      setLoading(false);
      // alert('An error happened.Please check console');
      enqueueSnackbar('Error Bro',{ variant:'error'});
      console.log(error);
    });
  };

  return (
    <div>
    <style>
      {`
        body {
          background-color:#9CA3AF; /* Set your desired background color */
        }
      `}
    </style>
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3x1 my-4'>Delete Book</h1>
      {
        loading?(
          <Spinner/>
        ):(
          <div>
            <p>Are you sure you want to delete this book?</p>
            <button onClick={handleDeleteBook} className='bg-red-800 text-white px-4 py-2 rounded-md '>Delete</button>
          </div>
        )
      }
    </div>
    </div>
  )
}

export default DeleteBook