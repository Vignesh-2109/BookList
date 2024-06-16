import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import axios from 'axios';
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <style>
        {`
          body {
            background-color:#B4C6FC; /* Set your desired background color */
          }
        `}
      </style>
      <div className='p-4'>
        <div className='flex justify-center items-center gap-x-4'>
          <button
            className='bg-amber-400 hover:bg-sky-600 px-4 py-1 rounded-lg'
            onClick={() => setShowType('table')}
          >
            Table
          </button>
          <button
            className='bg-emerald-500 hover:bg-sky-600 px-4 py-1 rounded-lg'
            onClick={() => setShowType('card')}
          >
            Card
          </button>
        </div>
        <div className="flex justify-between items-center p-4">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl my-8">LIST OF BOOKS</h1>
          </div>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-violet-800 text-4xl" />
          </Link>
        </div>
        {loading ?
          <Spinner /> : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)}
      </div>
    </div>
  );
};

export default Home;
