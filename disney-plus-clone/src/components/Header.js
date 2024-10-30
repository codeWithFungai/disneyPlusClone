import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth"; 
import { useDispatch, useSelector } from "react-redux"; //dispatch will send data to store.js and useSelector will read data from store.js
import { useNavigate } from "react-router-dom";
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails } from "../features/user/userSlice";

const Header = (props) => {

   const dispatch = useDispatch();
   const history = useNavigate();
   const userName = useSelector(selectUserName);
   const userPhoto = useSelector(selectUserPhoto);
   const userEmail = useSelector(selectUserEmail);




    const handleAuth = () => {
        // Use signInWithPopup method from the modular SDK
        signInWithPopup(auth, provider).then((result) => {
            setUser(result.user); //setUserId
        }).catch((error) => {
            alert(error.message);
        });
    };


    const setUser = (user) => {
        dispatch( //dispatching the user object from google to the redux store.
                setUserLoginDetails({
                     name: user.displayName,
                     email: user.email,
                     photo: user.photoURL,
              })
            );
          };

    return <Nav>
               <Logo>
                <img src = "/images/logo.svg" alt="Disney+Logo" />   
               </Logo>

               
               {
                 //if the user hasnt signed in yet then just show the button, otherwise replace the button with the user's profile photo.
                 !userName ? <Login onClick={handleAuth}>Login</Login> : 
                 <>
               <NavMenu>
                <a href="/home">
                   <img src="/images/home-icon.svg" alt="home-icon" />
                   <span>HOME</span>
                </a>
                <a href="/">
                   <img src="/images/search-icon.svg" alt="search-icon" />
                   <span>SEARCH</span>
                </a>
                <a href="/">
                   <img src="/images/watchlist-icon.svg" alt="watchlist-icon" />
                   <span>WATCHLIST</span>
                </a>
                <a href="/">
                   <img src="/images/original-icon.svg" alt="original-icon" />
                   <span>ORIGINALS</span>
                </a>
                <a href="/">
                   <img src="/images/movie-icon.svg" alt="movie-icon" />
                   <span>MOVIES</span>
                </a>
                <a href="/">
                   <img src="/images/series-icon.svg" alt="series-icon" />
                   <span>SERIES</span>
                </a>
               </NavMenu>
                <UserImg src={userPhoto} alt={userName} />
               </>
                }
               
           </Nav>

};


const Nav = styled.nav`
position: fixed; //keep the nav bar at the top regardless of scroll. 
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #090b13;
display: flex;
justify-content: space-between; //push the items as far apart as possible
align-items: center; //vertically center the items.
padding: 0 36px; //move the items away from the edge of the screen, to the right.
letter-spacing: 16px;
z-index: 3; //make sure the header always stays on top. 
`;


const Logo = styled.a`
padding: 0;
width: 80px;
margin-top: 4px;
max-height: 70px;
font-size: 0%;
display: inline-block; //all elements will appear side by side in the same line.
img {
    display: block;
    width: 100%;
}
`;

const NavMenu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap; //keep all flex items in a row and do not allow them to overlap to the next line or overflow out of the container.
height: 100%;
justify-content: flex-end; //push this flex item to the far-most right side of the container.
margin: 0;
padding: 0;
position: relative;
margin-right: auto;
margin-left: 25px;

a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img { //for all images inside of a link tag
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
    }
    
    span {
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap; 
        position: relative;

        &:before { //create an underline under the link element
        background-color: rgb(240, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center; //start the animation from the left-center of the element.
        transform: scaleX(0); //shrink the element horizontally
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; //create the gradual underline effect through a transition. 
        visibility: hidden; //hide the element from the user.
        width: auto; //set the width automatically based on the width of its parent.

        }
    }

    &:hover {  //on hover
       span:before { 
        transform: scaleX(1); //increase the width of the invisible underline to it's full width for visual effect
        visibility: visible; //make the invisible underline visible to the user.
        opacity: 1 !important; //opacity in conjuction with transform allows the underline to fade in smoothly. !important give the opacity precedence over other opacity instructions.
           } 

         }
    }
  

    
/* @media (max-width: 768px ) {
    display: none; //do not show the NavMenu on smaller screens.
} */
`;

const Login = styled.a`
background-color: rgba(0, 0, 0, 0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all .2s ease 0s;

&:hover { //on hover
    background-color: #f9f9f9; //change the background colour of the button to white.
    color: #000; //change the color of the text to black to create contrast that allows us to still read the "LOGIN" text.
    border-color: transparent; //adds a bit of flair to the border.
}
`;

const UserImg = styled.img`
height: 100%;
`

export default Header;