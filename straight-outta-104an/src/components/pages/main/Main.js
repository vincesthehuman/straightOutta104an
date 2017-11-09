import React, { Component } from 'react'
<<<<<<< HEAD
import Header from '../../layout/header/Header'
import NewsCard from '../../layout/newscard/NewsCard'
import Paper from 'material-ui/Paper'
=======
<<<<<<< HEAD
import NewsCard from '../../layout/newscard/NewsCard'
=======
import Header from '../../layout/header/Header.js'
>>>>>>> 539fc3382db8da8fc6e3bd25e530ccc7d6bad88e
>>>>>>> b63caf6fe589d624ea77cd72c1dc061633ea143c

class Main extends Component {
  render() {
    const getResults = {
      title: 'Team secret förlorade mot SG-e',
      imageUrl: '',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Sport',
      subCategory: 'E-sport',
      date: '2017-11-09'
    }
    return (
      <div className="Main">
<<<<<<< HEAD
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
            <NewsCard
              result={{
                title: 'Team secret förlorade mot SG-e',
                imageUrl: '',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
                mainCategory: 'Sport',
                subCategory: 'E-sport',
                date: '2017-11-09'
              }}
            />
          </div>
        </div>
=======
<<<<<<< HEAD
        <NewsCard></NewsCard>
=======
        <Header/>
>>>>>>> 539fc3382db8da8fc6e3bd25e530ccc7d6bad88e
>>>>>>> b63caf6fe589d624ea77cd72c1dc061633ea143c
      </div>
    )
  }
}

export default Main
