import React, { Component } from 'react'
import Header from '../../layout/header/Header'
import NewsCard from '../../layout/newscard/NewsCard'
import Paper from 'material-ui/Paper'

class Main extends Component {
  createCard(cardContent){
    return <div><NewsCard result={cardContent} /></div>
  }

  render() {
    let news = [{
      title: 'Team secret förlorade mot SG-e',
      imageUrl: '',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Sport',
      subCategory: 'E-sport',
      date: '2017-11-09'
    },
    {
      title: 'Team secret förlorade mot SG-e',
      imageUrl: '',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Sport',
      subCategory: 'E-sport',
      date: '2017-11-25' 
    }
  ]
    return (
      <div className="Main">
        <Header />
        <div
          style={{
            paddingTop: '10px'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap'
            }}
          >
          <NewsCard result={news[0]} />
          
            {news.forEach(element => {
             this.createCard(element)
            })} 
            
          </div>
        </div>
      </div>
    )
  }
}

export default Main
