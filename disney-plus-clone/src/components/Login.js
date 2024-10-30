import styled from "styled-components";
const Login = (props) => {

    return (
           <Container>
                  <Content>
                    <CallToAction>
                          <CTALogoOne src="/images/cta-logo-one.svg" alt="callToActionLogo1"/>
                          <SignUp>GET ALL THERE</SignUp>
                          <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/10/24. the price of Disney+ and The Disney Bundle will increase by $1.
                          </Description>
                          <CTALogoTwo src="/images/cta-logo-two.png" alt="callToActionLogo2"/>
                    </CallToAction>
                      <BgImage />
                  </Content>
          </Container>
    );

};

const Container = styled.section` //the container is basically a <section> HTML element with additional styling applied through template literal syntax provided by styled components. 
overflow: hidden; //hide anything the overflows through the boundaries of the container.
display: flex; //turns all the children of the container into flex items which use special rules for how to arrange themselves within the container. The special rules make for easy alignment and spacing between the children of the container. 
flex-direction: column; //ensures that the children of the container (flex items) are arranged vertically, in a column instead of the default horizontal row. 
text-align: center; //places the text in the center of the container.
height: 100vh;
`;

const Content = styled.div` //a div element.
margin-bottom: 10vw; //leave a space between the bottom of the div and the next element of 10% of the viewport width
width: 100%; //occupy the full width of the parent element from left to right. 
position: relative; //allow for the element to be moved left right, top or bottom relative to where it would ordinarily be. 
min-height: 100vh; //make it as tall as the entire viewport of the screen. 
box-sizing: border-box; //prevent unexpected shifts by including the padding and border in the width and height calculation of the element.
display: flex;
justify-content: center; //center the element horizontally. 
align-items: center; //center the element vertically. 
flex-direction: column;
padding: 80px 40px; 
height: 100%;
`; 


const BgImage = styled.div`
background-image: url("/images/login-background.jpg");
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
position: absolute; //allow for the element to be moved within its parent containter using top, right and left properties.  
top: 0%;
right: 0%; //stretch to the extreme right of your parent container. 
left: 0%; //stretch to the extreme left of your parent container.
z-index: -1; //place the element behind other elements with a higher z-index.
`;

const CallToAction = styled.div`
max-width: 650px;
display: flex; //arrange all flex items in a single line (row or column depending on flex-direction). 
flex-direction: column; //arrange all flex items into a column, so from top to bottom. 
width: 100%;
`;


/**const CallToAction = styled.div`
margin-bottom: 2vw;
max-width: 650px;
display: flex; //arrange all flex items in a single line (row or column depending on flex-direction). 
flex-direction: column; //arrange all flex items into a column, so from top to bottom. 
flex-wrap: wrap; //if there isnt enough space in the container for all flex items to fit in a column, then don't allow them to shrink or overflow out of the container. Instead, move the excess items to a new line.
justify-content: center; 
margin-top: 0;
align-items: center;
text-align: center;
margin-right: auto; //center the element
margin-left: auto; //center the element
transition-timing-function: ease-out; //transition starts fast and slows down towards the end.
transition: opacity 0.2s; //gradually fade.
width: 100%;
`;**/




const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block; //occupy the full width availabe in the parent container by default. allows for width and height to be set directly. also forces elements that come after it to start on a new line because all the width is already taken up.
width: 100%;
`;


const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
    background-color: #0483ee;
}
`

const Description = styled.p`
color: hsla(0, 0%, 95.3%, 1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5em;
letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
max-width: 600px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`






export default Login; //this makes the Login component accessible to other parts of the application, such as App. js where the component is being called. 