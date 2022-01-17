import React, {Component} from 'react';
import './writeReview.css';
import { Header } from '../header/index.js';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useRadioGroup } from '@mui/material';

axios.defaults.withCredentials = true;

const WriteReview = () => {

    const theater = useParams();
    console.log(theater);

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
            user_id: 1,
            title: reviewTitle,
            content: reviewContents,
            theater: theater.theaterId,
            seatX: theater.theaterRow,
            seatY: theater.theaterColumn,
            rate: null,
        })
        .then(function(response) {
            console.log(response);
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
                <p>영화관 이름</p>
                <p>{theater.theaterRow}행 {theater.theaterColumn}열</p>
            </div>
            <br/>
            <div className='WriteReviewParagraph'>
                <textarea className='ReviewWritingArea' name='reviewContents' placeholder='내용을 입력하세요.'></textarea>
            </div>
            <br/>
            <button id='reveiwSubmit' onClick={submitReview}>등록</button>
        </div>
    );
}

/*class WriteReview extends Component{
    constructor(props){
        super(props);
        this.theaterData = {theaterName: "용산아이맥스", theaterRow: "P", theaterColumn: "10"};
    }


    submitReview = async function(){
        const reviewTitle = document.getElementsByName('reviewTitle')[0].value.trim();
        const reviewContents = document.getElementsByName('reviewContents')[0].value.trim();

        if(reviewTitle === ""){
            return alert('제목을 입력해주세요.');
        }
        else if(reviewContents === ""){
            return alert('내용을 입력해주세요.');
        }

        const data = {reviewTitle: reviewTitle, reviewContents: reviewContents};
    }

    //const theaterData = props.location.state;
    //console.log(theaterData);

    render(){
        return (
            <div className='WriteReviewMain'>
                <Header />
                <br/>
                <div className='titleWrap'>
                    <input type='text' className='WriteReviewTitle' name='reviewTitle' placeholder='제목을 입력해주세요.'/>
                </div>
                <div className='theaterInfo'>
                    <p>{this.theaterData.theaterName}</p>
                    <p>{this.theaterData.theaterRow}행 {this.theaterData.theaterColumn}열</p>
                </div>
                <br/>
                <div className='WriteReviewParagraph'>
                    <textarea className='ReviewWritingArea' name='reviewContents' placeholder='내용을 입력하세요.'></textarea>
                </div>
                <br/>
                <button id='reveiwSubmit' onClick={this.submitReview}>등록</button>
            </div>
        )
    }

    
}*/

export default WriteReview;