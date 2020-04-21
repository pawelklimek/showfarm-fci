import React from 'React';
import styled from "styled-components";
import Separator from "../separator/separator";
import {theme} from "static/layout/theme";

const DogCardWrapper = styled.div`  
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const DogCardStyle = styled.div`  
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 90vh;
  margin: 1rem;
`;

const Top = styled.div`  
  flex: 2;
  display: flex;
  flex-direction: row;
`;

const TopText = styled.div`  
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.lightGray};
  padding: 1rem;
`;

const Name = styled.div`  
  font-size: 2rem;
`;

const FullName = styled.div`  
  white-space: pre-wrap;
`;

const CardImg = styled.div`  
  flex: 0 0 50%;
  background-position: 50% 50%;
  background-image: url(${({imgUrl}) => imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Bottom = styled.div`  
  flex: 3;
  display: flex;
  flex-direction: row;
`;

const BottomText = styled.div`  
  background-color: ${theme.colors.lightGray};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
`;

const DogCard = (props) => {
    return (
        <DogCardWrapper>
            <DogCardStyle>
                <Top>
                    <CardImg imgUrl={props.topImage}/>
                    <TopText>
                        <Name>{props.name}</Name>
                        <Separator/>
                        <FullName>{props.fullName}</FullName>
                    </TopText>
                </Top>
                <Bottom>
                    <BottomText as={'text'}>{props.description}</BottomText>
                    <CardImg imgUrl={props.bottomImage}/>
                </Bottom>
            </DogCardStyle>
        </DogCardWrapper>

    )
};

export default DogCard;
