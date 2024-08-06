import { useState } from "react"
import { Data } from "./Data"
import styled from "styled-components"
import { IconContext } from "react-icons"
import { FiPlus, FiMinus } from "react-icons/fi"

const AccordionSection = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
  color:#fff; 
  padding:2rem;

`;

const Container = styled.div`
  
  display:flex;
  flex-direction:column;
 
`;

const Img = styled.img.attrs(props => ({
  src: props.src, 
}))`
width: 100px;
height: 100px;
align-self:flex-end;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 80vw;
  cursor: pointer;
  margin-top:1rem;
  

  h2 {
    color: #fff;
  }

  span {
    display: flex;
    align-items: center;
    transition: transform 0.2s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

const AccordionContent = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? "1rem" : "0 1rem")};
  color: #4e647b;
  width:80vw;
  border-radius:0 0 0.5rem 0.5rem;
  border: 1px solid #4e647b;
  border-top:none;
  display:flex;
  flex-direction:column;
  

  p {
    margin: 0;
    padding: ${({ isOpen }) => (isOpen ? "1rem 0" : "0")};
    color: #fff;
  }
`;

function Accordion () {
const [clicked, setClicked] = useState(false)

const toggle = index =>{
  if (clicked === index){
  return setClicked(null)
  }
setClicked(index)
}

  return (
  <IconContext.Provider value={{color:'white', size:'25px'}}>
    <AccordionSection>
      <Container>
       {Data.map((item,index)=>{
          return(
            <>
              <Wrap onClick={()=>toggle(index)} isOpen={clicked === index} style={{backgroundColor:`${item.color}`}}>
                <h2>{item.title}</h2>
                <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
              </Wrap>
              {clicked === index?  <AccordionContent isOpen={clicked === index} style={{backgroundColor:`${item.color}`}}>
                <p>{item.description}</p>
                <Img src={item.image}></Img>
              </AccordionContent> : null}

            </>
          )
       })}
      </Container>
    </AccordionSection>
  </IconContext.Provider>
  )
}

export default Accordion