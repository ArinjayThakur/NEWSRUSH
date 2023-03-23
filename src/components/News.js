import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
   static defaultProps=
 {
    country:'in',
    category:"general"
 }
 static propTypes={
      country:PropTypes.string,
      category:PropTypes.string
 }
  
    constructor(props)
    {
        super(props);
        console.log("hello")
        this.state={
          articles:[],
          loading:false,
          page:1,
          totalResults:0
        }
        document.title=`${this.props.category}-NewsMonkey`;
    }

    async componentDidMount()
    {
        console.log("mounted");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25950c7f7eb64dacb2484870255ae3eb&page=${this.state.page}&pageSize=15`;
        this.setState({loading:true});
       let data= await fetch(url);
     let parsedData=await data.json();
     console.log(parsedData);
     this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
    }

    clickPrevClick=async()=>{
     console.log("previous button clicked");
     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25950c7f7eb64dacb2484870255ae3eb&page=${this.state.page-1}&pageSize=15`;
     let data= await fetch(url);
     let parsedData=await data.json();
     console.log(parsedData);
     this.setState({articles:parsedData.articles,loading:false});
     this.setState({page:this.state.page-1});

    }
    clickNextClick=async()=>{
      if(this.state.page+1<=Math.ceil(this.state.totalResults/15))
      {
       console.log("next button clicked");
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25950c7f7eb64dacb2484870255ae3eb&page=${this.state.page+1}&pageSize=15`;
      let data= await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({page:this.state.page+1});
      this.setState({articles:parsedData.articles,loading:false});
      }
     
    }
  render() {
    return (
        <>
        <div className="container my-3">
      <h2 className='text-center my-3'>TOP HEADLINES</h2>
      <div className='text-center'>
      {this.state.loading && <Spinner/>}
      </div>
      
      <div className="row">
      {!this.state.loading && this.state.articles.map((element)=>{
        return( 
        <div className="col-md-4" key={element.url}>
        <NewsItem  title={element.title?element.title.slice(0,60):""} description={element.content?element.content.slice(0,45):""} imageurl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author}>
        </NewsItem>
        </div>
        )
        }
        )}
    </div>
    </div>
    <div className="container d-flex justify-content-between">
    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.clickPrevClick}> &larr; PREVIOUS</button>
    <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/15)}type="button" className="btn btn-dark" onClick={this.clickNextClick}>NEXT &rarr;</button>
    </div>
      </>
    )
  }
}
