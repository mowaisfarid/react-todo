import React, { useState, useRef, useEffect } from 'react';
import './index.css'

function App() {
  const [userData, setUserdata] = useState([]);
  var userName = useRef();

  useEffect(() => {
    var usersData = JSON.parse(localStorage.getItem('usersData'));
    if (usersData) {
      setUserdata(usersData)
    }

  }, [])

  function createPost() {
    var name = userName.current.value;
    var userPost = document.getElementById('userPost').value;

    var data = {
      name: name,
      userPost: userPost
    }

    setUserdata([...userData, data])
    localStorage.setItem("usersData",JSON.stringify(userData))
    
    userName.current.value = "";
    document.getElementById('userPost').value = "";

  }

  function deleteBtn(index) {
    var newUserdata=[...userData]
    newUserdata.splice(index,1)
    setUserdata(newUserdata)

    console.log('delete post function==>');
    
  }

  function editBtn(index) {

    var editPost=prompt('Edit your post here')
    var oldUserData=[...userData]
    oldUserData[index].userPost=editPost
    setUserdata(oldUserData)

    console.log('edit post function==>');
    
  }



  return <div className='mainDiv'  >

<input className="ml-2 form-control" type="text" ref={userName} placeholder="Enter your name " required />
    <input className="ml-2 form-control" type="text" id="userPost" required placeholder='share your thoughts' />

    <button className="ml-2 mt-2 btn btn-outline-primaryl" onClick={createPost}>Post</button>



    {
      userData.map((value,index)=>{
        return <div key={index}>

          <h1 className=''>
            <img src="" width='' height=''  className=''/>

          {value.name}</h1>

          <p className="">{value.userPost}

        <button className="ml-1 btn btn-outline-primary" onClick={(e)=>deleteBtn(index)}>Delete</button>
        <button className="ml-1 btn btn-outline-primary" onClick={(e)=>editBtn(index)}>Edit</button>
          </p>

          <img width="" src="" />
        </div>
      })

    }
</div>
      }

export default App;
