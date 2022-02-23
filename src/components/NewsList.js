import {React} from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {loadTopstories, fetchStoryById} from '../state/actions';

function NewsList() {
const [allStory, setAllStory] = useState([]);
const [pagStory, setPagStory] = useState([]);
const [numPages, setNumPages] = useState(0);
const [currPage, setCurrPage] = useState(0);
const [pages, setPages] = useState([]);
const perPage=17;

useEffect(()=>{
    loadTopstories().then((sData) => 
    {
        setNumPages(Math.round((sData.length)/perPage)+0.5)
        let saveStories=[];
        sData.forEach((story,idx) =>{
        fetchStoryById(story).then((idata) => {
            saveStories.push(idata)
            if(idx==sData.length-1)
            {
                setAllStory(saveStories);
                setPagStory(saveStories.slice(0,perPage))

            }    
        })
            
    })
}    )
}, []);

  useEffect(() => {
    renderPageNumbers()
  }, [numPages]);

  useEffect(() => {
    setCurrPage(1)
  }, [allStory]);

  useEffect(() => {
    setPagStory(allStory.slice(currPage*perPage-perPage,currPage*perPage))
  }, [currPage]);

const handleClick=(event) => {
    setCurrPage(event.target.id)
  };


    let renderPageNumbers = () => {
        let i = 1;
        let auxArr = [];
        for (i; i < numPages + 1; i++) {
            auxArr.push(
                <span
                    key={i}
                    id={i}
                >
                    <button
                        key={i}
                        id={i}
                        onClick={handleClick}>

                        {i}
                    </button>
                </span>)
        }
        setPages(auxArr)
    }


    return (<>
        <ul>
            {pagStory.map((story, idx) => {
                return <li key={idx}><p>{story.data.title}</p></li>
            })}
        </ul>
        <ul id="page-numbers">
            {pages}
        </ul>
    </>);
}

export default NewsList;
