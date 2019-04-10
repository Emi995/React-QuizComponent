import React,{Component} from 'react'
import quiz_data from './quiz_data.json'


//let quizData=require('./quiz_data.json') //require is same as import 
let quizData=quiz_data;
export class Quiz extends React.Component{
    state={
        quiz_position:1
    }
    render(){
        return(
            <div>
                <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
            </div>
            
        )
    }
}