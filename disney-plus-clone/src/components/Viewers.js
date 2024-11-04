import styled from "styled-components";

const Viewers = (props) => {
    return <Container>
            <Wrap>
                   <img src="images/viewers-disney.png" alt="" /> 
                   <video autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/1564674844-disney.mp4" type='video/mp4' />
                    </video>     
            </Wrap>   
            <Wrap>
                   <img src="images/viewers-marvel.png" alt="" />
                   <video autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                    </video>   
            </Wrap> 
            <Wrap>
                   <img src="images/viewers-national.png" alt="" />   
                   <video autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
                    </video>  
            </Wrap> 
            <Wrap>
                   <img src="images/viewers-pixar.png" alt="" />    
                   <video autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                    </video>   
            </Wrap> 
            <Wrap>
                   <img src="images/viewers-starwars.png" alt="" />  
                   <video autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                    </video>    
            </Wrap> 
    </Container>
}

const Container = styled.div`
margin-top: 30px;
padding: 30px 0px 26px;
display: grid; 
grid-gap: 25px;
gap: 25px;
grid-template-columns: repeat(5, minmax(0, 1fr));

@media (max-width: 768px){ //on a device with a smaller screen, show the grid from top to bottom instead of left to right. 
    grid-template-columns: repeat(1, minmax(0, 1fr));
}
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; //smooth transition when you hover on a wrapped item.
  border: 3px solid rgba(249, 249, 249, 0.1); //grey border by default. 

img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1; 
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1; //the images must appear in front of the videos.
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0; //the video is alaways playing in the background but hide it from the user until they hover on it.
    z-index: 0; //the videos must appear behind the images.
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px; //increase the box shadow on hover.

    transform: scale(1.05); //increate the wrapped element in size by 1.05 on hover.
    border-color: rgba(249, 249, 249, 0.8); //change the colour of the border to a brighter white on hover.

    video {
      opacity: 1; //show the video to the user on hover.
    }
  }


`;

export default Viewers;