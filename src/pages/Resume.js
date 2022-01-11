import styled from "styled-components";

const Body = styled.body`
    #resume {
        align-items: center;
        margin: 10px;
        /* border: solid 1px black; */
        filter: drop-shadow(3px 3px 5px grey);
    }
    @media (max-width: 768px) {
        #resume {
          height: 700px;
          width: 600px;
        }
      }
`
const Resume = (props) => {
    return (
        <Body>
            <p>Click Image to Download</p>
            <a href="https://docs.google.com/document/d/1kCypDermJ82dgx75fJKxgm9zswsNfOiDs4GudD_AgRk" Download>
                <img id="resume" src="https://imgur.com/zwWQIaR.jpg" alt="resume" ></img>
            </a>
        </Body>
    )
};

export default Resume;