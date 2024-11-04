import styled from "styled-components"; //import the styled components library which allows us to implement css styling directly in javascript files. 
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, onSnapshot } from "firebase/firestore";

const Home = (props) => { //define a component named Home which will take parameters or properties from it's parent component.

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        console.log("hello");
        
        // Use `collection` and `onSnapshot` from Firebase's modular SDK
        const movieCollectionRef = collection(db, "movies");
        
        const unsubscribe = onSnapshot(movieCollectionRef, (snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case "recommend":
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        console.log("Document data:", recommends);
                        break;
                    case "new":
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                        break;
                    case "original":
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;
                    case "trending":
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;
                    default:
                        break;
                }
            });
            
            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trending,
                })
            );
        });
        
        // Cleanup listener on unmount
        return () => unsubscribe();
        
    }, [userName]);

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    );
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home; //make the component accessible to other files in the app.
