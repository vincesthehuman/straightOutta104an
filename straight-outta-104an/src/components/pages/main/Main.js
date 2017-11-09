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
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
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
