import React, { Component } from 'react'

export default class NewsItem extends Component {  
  render() {
    let {title,description,imageurl,newsUrl,author,date}=this.props;
    return (
        <>
        <div className="card my-3">
        <img src={imageurl ? imageurl : "https://www.hindustantimes.com/ht-img/img/2023/03/17/1600x900/sisodia_1679043472797_1679043472948_1679043472948.jpg" } className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className='card-text'><small className='text-muted text-center'><strong>  Author :</strong> {author?author:"Unknown Source"} </small></p>
          <p className='card-text'><small className='text-muted'><strong> Date : </strong>{date}</small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Readmore</a>
        </div>
      </div>
      </>
    )
  }
}
