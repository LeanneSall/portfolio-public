import styled from 'styled-components'


//About/Home styles

//Hello Section

export const HelloTitle = styled.div`
    
    
   
    
`

export const Wrapper = styled.div`
min-height: 90vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 5rem 10rem;
    padding-bottom: 15rem;

`

export const Title = styled.div`
flex: 1;
padding-right: 5rem;

z-index: 2;

   

`
export const Image = styled.div`
z-index: 2;
    img {
        flex: 1;
        background-color: #81c2e6;
        border-radius: 50%;
        width: 40rem;
        height: 40rem;
        
        //margin-left: 5rem;
        
    }
    

`

export const Hide = styled.div`
overflow: hidden;
`



export const Card = styled.div`
    display: flex;
    justify-content: space-around;
    height: 45vh;
    align-items: center;
    padding-left: 5rem;

    margin-top: 2rem;
   margin-left: 5rem;
   margin-right: 5rem;
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




// export const Answer = styled.div`

//         padding: 2rem 0rem;
//         p {
//             padding: 1rem 0rem;
//         }


// `


// export const Question = styled.div`

// padding: 3rem 0rem;
//         cursor: pointer;


// `