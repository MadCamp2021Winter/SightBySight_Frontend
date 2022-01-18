import React, {Component, useEffect, useState} from 'react';
import './writeReview.css';
import { Header } from '../header/index.js';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useRadioGroup } from '@mui/material';

axios.defaults.withCredentials = true;

const WriteReview = () => {

    const theater = useParams();
    console.log(theater);

    const [theaterInfo, setTheaterInfo] = useState([]);

    useEffect(() => {
        axios.get("http://192.249.18.169:443/theaters/")
            .then((response) => {

                setTheaterInfo([...response.data]);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
        });
    }, [ ])

    const submitReview = () => {
        const reviewTitle = document.getElementsByName('reviewTitle')[0].value.trim();
        const reviewContents = document.getElementsByName('reviewContents')[0].value.trim();

        if(reviewTitle === ""){
            return alert('제목을 입력해주세요.');
        }
        else if(reviewContents === ""){
            return alert('내용을 입력해주세요.');
        }

        const data = {reviewTitle: reviewTitle, reviewContents: reviewContents};

        console.log(reviewTitle);
        console.log(reviewContents);
        console.log(theater.theaterId);
        console.log(theater.theaterRow);
        console.log(theater.theaterColumn);

        axios.post("http://192.249.18.169:443/reviews/posts/",{
            user_id: sessionStorage.getItem("user_id"),
            title: reviewTitle,
            content: reviewContents,
            theater: theater.theaterId,
            seatX: theater.theaterRow,
            seatY: theater.theaterColumn,
            rate: null,
        })
        .then(function(response) {
            console.log(response);
            window.location.href = "/Seats";
        })
        .catch(function(error) {
            console.log(error.response);
        });
    }

    return(
        <div className='WriteReviewMain'>
            <Header />
            <br/>
            <div className='titleWrap'>
                <input type='text' className='WriteReviewTitle' name='reviewTitle' placeholder='제목을 입력해주세요.'/>
            </div>
            <div className='theaterInfo'>
                {
                    theaterInfo.map(item => {
                        if(item.id == theater.theaterId){
                            return(<p>{item.name}</p>)
                        }
                    })
                }
                <p>{theater.theaterRow}행 {theater.theaterColumn}열</p>
            </div>
            <br/>
            <div className='WriteReviewParagraph'>
                <textarea className='ReviewWritingArea' name='reviewContents' placeholder='내용을 입력하세요.'></textarea>
            </div>
            <br/>
            <Button size="large" color="secondary" variant="contained" onClick={submitReview}>등록</Button>
            
        </div>
    );
}

export default WriteReview;