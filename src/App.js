import React, { Component } from 'react'
import ImageList from './components/ImageList';
import ImageSearch from "./components/ImageSearch";

const API_KEY="19242763-b55c3b522d57ec4d497f0f0eb";

export default class App extends Component {

  state={
    images:[],
    error:null
    }

  fetchData=async(e)=>{     
    e.preventDefault()  
    let searchTerm=e.target.searchValue.value;
    console.log(searchTerm)
    const url=`https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
    const  request=await  fetch(url);
    const response=await request.json()
    console.log(response)

    if(searchTerm){
      this.setState({
        images:response.hits,
        error:null
      }) 
    }
    else{
      this.setState({
        error:"Please enter a value to Search",
      })
    }

}

  
    /*console.log(searchTerm)
    console.log(this.state.images) */         
  
  /*componentDidMount(){
    this.fetchData();
  }*/
  render() {
      
    return (
      <div>
        
          <ImageSearch fetchData={this.fetchData}/>
          
         {
           this.state.error !==null ? <div className="errorMsg">
                  {this.state.error}
            </div>:
            <ImageList images={this.state.images}/>
          }
           
         
      </div>
    )
  }
}
//In this project I created an image searcher app using PIXZBAY API , so here we can search for the images that we need (example: beach,chicken,apple, dog etc)