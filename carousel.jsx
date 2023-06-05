  import React from "react"
import Button from "../../components/Buttons/buttons"
//import styled from 'styled-components'
import Card from '../../components/Card/card'
import Carousel from 'react-elastic-carousel'
function Carousely() {
const breackPoint =[
    {  width:500,itemsToShow:1},
    {  width:768,itemsToShow:2},
    {  width:1200,itemsToShow:3},
    {  width:1500,itemsToShow:4},

]
    
    return (
<>
<Button 
width={180}
borRad={5}
margBot={20}
text={'LOAD MORE PRODUCT'}
border={1}
padding={10}
marTop={20}
bgColor={'white'}
bColor={'grey'}
fSize={13}
fWate={500}

/>
<div>
<Button 
width={180}
borRad={5}
margBot={20}
text={'WEEKLY DEALS'}
border={1}
padding={10}
bgColor={'white'}
bColor={'grey'}
fSize={13}
fWate={500}

/>
<Button 
width={180}
borRad={5}
// margBot={1}
text={'TRENDING'}
border={1}
padding={10}
bgColor={'white'}
bColor={'grey'}
fSize={13}
fWate={500}

/>

<Carousel breackPoint={breackPoint} >
    <Card text='1'/>
    <Card text='2'/>
    <Card text='3'/>
    <Card text='4'/>
    <Card text='5'/>
    <Card text='6'/>
    <Card text='7'/>
    <Card text='8'/>
    <Card text='9'/>
    <Card text='10'/>
    <Card text='11'/>
    <Card text='12'/>
</Carousel>
</div>
</>
        
    )
}
export default Carousely