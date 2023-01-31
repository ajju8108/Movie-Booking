import React from 'react'
import Header from '../../common/header/Header'
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import moviesData from '../../common/./moviesData';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Header />
                <div className='homeheading'>
                    <h1><span>Upcoming Movies</span></h1>
                    {/* <ImageList/> */}
                </div>

                <div className={classes.root}>
                    <ImageList className={classes.imageList} cols={5}>
                        {moviesData.slice(0, 6).map((item, index) => (
                            <ImageListItem key={item.img} style={{ height: "250" }}>
                                <img src={item.poster_url} alt={item.title} />
                                <ImageListItemBar
                                    title={item.title}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={`star ${item.title}`}>
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>

                <div className="flex-container">
                    <div className="releasedmovie" style={{flexBasis:"76%", float:"left"}}>
                         <div className={classes.root}>
                    <ImageList className={classes.imageList} cols={5}>
                        {moviesData.slice(0, 4).map((item, index) => (
                            <ImageListItem key={item.img} style={{ height: "350", cursor:"pointer" }}>
                                <img src={item.poster_url} alt={item.title} />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={`Release Date ${new Date(item.release_date)}`}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={`star ${item.title}`}>
                                        </IconButton>
                                    }
                                
                                />
                                
                            </ImageListItem>
                        ))}
                    </ImageList>
                    
                </div>
                    </div>
  
                    <div className="left" style={{flexBasis:"24%"}}>
                        released movies
                    </div>
                </div>

            </div>
        </div>
    )
}

