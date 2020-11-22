import styled from 'styled-components'


//About/Home styles

//Hello Section

export const HelloTitle = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    
`

export const Title = styled.div`
flex: 1;
padding-right: 5rem;
font-weight: lighter;

`
export const Image = styled.div`
flex: 1;


    div {
        background-color: #A8D0E6;
        border-radius: 50%;
        width: 25rem;
        height: 25rem;
        margin-left: 15rem;
    }
    

`

export const Hide = styled.div`
overflow: hidden;
`


//Specialize Section

export const Card = styled.div`
    display: flex;
    justify-content: space-around;
    height: 35vh;
    align-items: center;
    padding-left: 2rem;
    background-color: #374785;
    margin: 5rem;
    flex-wrap: wrap;
    
    


   h2 {

         padding-right: 2rem;
         
         

   }

   ul {
                    flex: 1;
       padding-top: 5rem;
       padding-left: 5rem;
      
   }

   li {
                    font-size: 1.8em;
   }

    
    `

//FAQ Section 


export const FAQ = styled.div`
min-height: 90vh;
    display: block;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    

   
`

export const Answer = styled.div`

        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    

`


export const Question = styled.div`

padding: 3rem 0rem;
        cursor: pointer;
    

`