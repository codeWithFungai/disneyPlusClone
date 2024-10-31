import styled from "styled-components"; //import the styled components library which allows us to implement css styling directly in javascript files. 
import ImgSlider from "./ImgSlider";

const Home = (props) => { //define a component named Home which will take parameters or properties from it's parent component. ]
    return <Container>
                <ImgSlider />
           </Container> //when called, return the following HTML, CSS ans JS logic. 
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