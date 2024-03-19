import Box from './LoginBox';
import { useState } from "react";
import { useEffect } from "react";
import { useUser } from './UserContext';


function Home(){
    const { user } = useUser();
    const [booklist, setBookList] = useState([]);
    useEffect(() => {
       getBooks()
      }, []);
    
      async function getBooks(){
        const url = `http://localhost:3030/booklist?user=${user}`;
        const res = await fetch(url);
        const data = await res.json();
        setBookList(data);
      } 
    return(
    <main>
        <div className='header'>
            <h1>
            Book <span className='hspan'> Best Friend </span>
            </h1>
            <button className="homebtn">
                Home
            </button>
            <button className="recbtn">
                Recommendations
            </button>
            <button className="addbtn">
                Add Book
            </button>
            <div>
                <button className='logoutbtn'>
                Log Out
                </button>
            </div>
        </div>
        <div className='books'>
                {booklist.length > 0 && booklist.map(book => (
                    <Box>
                        <div className='book' key={book.id}>
                            <div className='name'>{book.name}</div>
                            <div className='author'>{book.author}</div>
                            <div className='description'>{book.descrip}</div>
                            <div className='opinion'>{book.opinion}</div>
                            <div className='datetime'>{book.dt}</div>
                        </div>
                    </Box>
                ))}
            </div>
    </main>
    )
}

export default Home;