import React, { Component } from 'react'
import Header from '../../layout/header/Header'
import NewsCard from '../../layout/newscard/NewsCard'
import Paper from 'material-ui/Paper'

class Main extends Component {
  render() {
    let news = [{
      title: 'Team secret förlorade mot SG-e',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/02/23/02/17/controller-1216816_640.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Sport',
      subCategory: 'E-sport',
      date: '2017-11-09'},
      
      {
        title: "Recension av nya Thor-filmen",
        imageUrl: "https://thumbs.dreamstime.com/z/theatre-6065014.jpg",
        content: "Vivamus tempor tincidunt magna, vel facilisis odio bibendum vitae. Praesent egestas diam sit amet enim scelerisque viverra. Praesent vitae mi at nisi semper cursus. Nullam eget pulvinar metus. Etiam vel mi semper, rutrum est at, varius quam. Donec consequat pharetra libero, ac sodales massa laoreet ut. Sed eleifend elementum nulla sit amet scelerisque. Integer vitae diam lectus. Sed quis elit ut sem porttitor pretium sed consequat ipsum. Suspendisse posuere efficitur posuere. Integer laoreet id ex eget volutpat. In hac habitasse platea dictumst. Aliquam pulvinar dignissim leo, ut luctus metus iaculis vitae. Etiam congue tristique molestie. Aenean vel dui rhoncus, placerat magna ac, maximus nibh. Aliquam neque mauris, rhoncus nec eros non, convallis aliquet odio. ",
        mainCategory: "Kultur",
        subCategory: "Film",
        date: "2017-11-07"
        },
      
      {title: 'Kalmar FF möter Hammarby 13 december',
      imageUrl: 'https://thumbs.dreamstime.com/z/sport-equipment-2-22802518.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Sport',
      subCategory: 'Fotboll',
      date: '2017-11-05'},
      
      {title: 'Inbrott i Norrliden',
      imageUrl: 'https://thumbs.dreamstime.com/z/news-torn-brown-paper-revealing-word-80963336.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Nyheter',
      subCategory: 'Lokalt',
      date: '2017-11-02'},
      
      {title: "Filipa K öppnar i kalmar",
      imageUrl: "https://thumbs.dreamstime.com/z/search-fashion-d-illustration-magnifying-glass-over-letter-block-spelling-word-concept-white-background-48804857.jpg",
      content: "Praesent semper ut libero at euismod. In et tellus vel quam dictum vestibulum. Curabitur id sem eget turpis euismod efficitur porttitor sed magna. Nunc interdum, lorem quis condimentum cursus, magna felis accumsan sem, eu commodo quam mi eu lorem. Proin nec urna viverra, scelerisque magna eget, gravida dui. Praesent vehicula libero ut purus volutpat vestibulum. Suspendisse potenti. Sed faucibus nibh nec orci tristique, at gravida odio interdum. Pellentesque quis aliquam ante. Suspendisse sed purus consectetur, ultrices urna eget, aliquam eros. Aenean fringilla, ligula at commodo varius, tortor mi pretium justo, mattis faucibus lectus libero vitae quam. Vestibulum pellentesque facilisis enim, quis consectetur nisl dapibus ornare. Proin tempor venenatis eros, vitae auctor orci mollis eu. Nunc a libero vel risus egestas posuere laoreet ornare est. Ut posuere metus in enim lacinia, sit amet consequat arcu volutpat. ",
      mainCategory: "Mode",
      subCategory: "Dam",
      date: "2017-11-01"},
      
      {title: 'FBC Kalmarsunds herrar möter Karlstad hemma 25 november',
      imageUrl: 'https://thumbs.dreamstime.com/z/sport-equipment-2-22802518.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Sport',
      subCategory: 'Innebandy',
      date: '2017-10-25'},
      
      {title: 'Sverige investerar i nya parkbänkar över hela landet',
      imageUrl: 'https://thumbs.dreamstime.com/z/news-torn-brown-paper-revealing-word-80963336.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Nyheter',
      subCategory: 'Inrikes',
      date: '2017-10-23'},
      
      {title: 'Krismöte för EU-parlamentet i Bryssel',
      imageUrl: 'https://thumbs.dreamstime.com/z/news-torn-brown-paper-revealing-word-80963336.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Nyheter',
      subCategory: 'Utrikes',
      date: '2017-10-20'},
      
      {title: 'Polarn och pyret öppnar i Karlskrona',
      imageUrl: 'https://thumbs.dreamstime.com/z/search-fashion-d-illustration-magnifying-glass-over-letter-block-spelling-word-concept-white-background-48804857.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Mode',
      subCategory: 'Barn',
      date: '2017-10-15'},
      
      {title: 'Basshunter kommet till Sandra',
      imageUrl: 'https://thumbs.dreamstime.com/z/theatre-6065014.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Kultur',
      subCategory: 'Musik',
      date: '2017-10-10'},
      
      {title: 'Veckans erbjudande på Subway',
      imageUrl: 'https://thumbs.dreamstime.com/z/cat-waiting-some-food-isolated-white-71967450.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Mat',
      subCategory: 'Erbjudande',
      date: '2017-10-09'},
      
      {title: 'Rea på Dressman',
      imageUrl: 'https://thumbs.dreamstime.com/z/search-fashion-d-illustration-magnifying-glass-over-letter-block-spelling-word-concept-white-background-48804857.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Mode',
      subCategory: 'Herr',
      date: '2017-10-07'},
      
      {title: 'Grilleriet öppnar i Kalmar',
      imageUrl: 'https://thumbs.dreamstime.com/z/cat-waiting-some-food-isolated-white-71967450.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Mat',
      subCategory: 'Restauranger',
      date: '2017-10-05'},
      
      {title: 'Hamlet spelas i Stockholms operahus 17-19 oktober',
      imageUrl: 'https://thumbs.dreamstime.com/z/theatre-6065014.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem viverra diam commodo ullamcorper in non ex. Curabitur semper elit quis odio faucibus, quis aliquam nulla condimentum. Phasellus quis facilisis orci. Proin hendrerit vitae massa quis vestibulum. In sapien diam, varius id condimentum et, sodales eu lorem. Vestibulum vitae ex vitae felis elementum vulputate vel ac lorem. Vivamus vitae justo tincidunt mi accumsan egestas vehicula ac mauris. Etiam sit amet mi in libero efficitur ultricies tristique id libero. Donec rutrum nulla mi, vel consectetur est consequat a. Ut pharetra, magna vitae semper aliquet, mi erat ornare eros, in consequat dui arcu quis leo. Aenean luctus, nisi at aliquet ullamcorper, tellus leo feugiat diam, sed molestie lorem mi et lacus. Vivamus vel nulla ipsum. ',
      mainCategory: 'Kultur',
      subCategory: 'Teater',
      date: '2017-10-01'}
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
            {news.map(element => {
             return <div><NewsCard result={element} /></div>
            })} 
            
          </div>
        </div>
      </div>
    )
  }
}

export default Main
